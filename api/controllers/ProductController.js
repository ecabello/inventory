/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

 var removeFiles = function(files) {
   var fs = require('fs'), path = require('path');
   _.each(files, function(file) {
     fs.unlink('assets/images/' + path.basename(file.url), function(err) {
       if (err)
        sails.log.warn(err.message);
       else
        sails.log.info('File ' + file.id + ' removed');
      });
   })
 };

 var makeFilesPermanent = function(ids, callback) {
   File.update({id: ids, temporary: true}, {temporary: false}).exec(function(err, files) {
    if (err)
      callback(err, files);

    if (files) {
      for (var i=0; i<files.length; i++)
        sails.log.info('File ' + files[i].id + ' made permanent');

      callback(null, files);
    }
   });
 };


module.exports = {

  userProducts: function(req, res) {
    var userId = req.param('userid');
    if (!userId)
        return res.badRequest('No user id specified');

    Product.find({owner: userId}).exec(function(err, products) {
      if (err)
        return res.serverError(err.message);

      var async = require('async');
		  var queue = async.queue(function(task, callback) {
		     File.find({id: task.product.images}, function(err, files) {
		         callback(err, task.product, files);
		     });
		  }, 2);

      // this is the queue's callback, called when the queue is empty,
      queue.drain = function() {
  			return res.json(products);
      };

      for (var i=0; i<products.length; i++) {
        var product = products[i];
        var hasImages = product.images ? (product.images.length > 0) : false;
        if (hasImages) {
          queue.push({ product: product }, function(err, product, files) {
					  if (err)
					    sails.log.info(err);
	          if (files) {
					    //for (var f=0; f<files.length; f++)
					    //    sails.log.info(files[f].url);
						  product.images = files;
					  }
          });
        }
      }
    });
  },

  myProducts: function(req, res) {
    // TODO: Find your products and the products you have access to
    Product.find({owner: req.user.id}).exec(function(err, products) {
        if (err)
          return res.serverError(err.message);

        return res.json(products);
    });
  },

  create: function(req, res) {
    var product = req.body ? req.body : req.params;

    // Create product
    Product.create(product, function(err, product) {
      if (err)
        return res.serverError(err.message);

      // Check if the product has images
      var hasImages = product.images ? (product.images.length > 0) : false
      if (hasImages) {
        // Product is created, update temporaries as permanent
        makeFilesPermanent(product.images, function(err, files) {
          if (err)
            sails.log.warn(err.message);

          return res.json(product);
        });
      }
      else
        return res.json(product);
    });
  },

  update: function(req, res) {
    var productId = req.param('id');
    if (!productId)
      return res.badRequest('No product id specified when trying to update');

    var fields = req.body ? req.body : req.params;

    // TODO: Find by id only and if owner not logged user then check the permissions
    Product.findOne({id: productId, owner: req.user.id}).exec(function(err, product) {
      if (err)
        return res.serverError(err.message);

      if (!product)
        return res.notFound('No record found with the specified id');

      // Gather existing images
      var prevImages = product.images || [];

      // Update the product
      Product.update({id: productId, owner: req.user.id}, fields).exec(function(err, products) {
          if (err)
            return res.serverError(err.message);

          // New copy of the product
          product = products[0];

          var hadImages = (prevImages.length > 0);
          var hasImages = product.images ? (product.images.length > 0) : false

          var deleted = [], newImages = [];
          if (hasImages) {
            if (hadImages) {
              deleted = _.difference(prevImages, product.images);
              newImages = _.difference(product.images, prevImages);
            }
            else
              newImages = product.images;
          }
          else if (hadImages)
            deleted = prevImages;

          if (deleted.length) {
            File.destroy({id: deleted }).exec(function(err, files) {
              if (err)
                sails.log.warn(err.message);
              if (files)
                removeFiles(files);
            });
          }
          if (newImages.length) {
            makeFilesPermanent(product.images, function(err, files) {
              if (err)
                sails.log.warn(err.message);
            });
          }
          //if (!products || !products.length)
          //  return res.notFound('No record found with the specified id');
          return res.json(product);
      });
    });
  },

  destroy: function(req, res) {
    var productId = req.param('id');
    if (!productId)
      return res.badRequest('No product id specified when trying to delete');

    // TODO: Find by id only and if owner not logged user then check the permissions
    Product.destroy({id: productId, owner: req.user.id}).exec(function(err, products) {
      if (err)
        return res.serverError(err.message);

      if (!products || !products.length)
        return res.notFound('No record found with the specified id');

      // Remove images
      if (products[0].images && products[0].images.length) {
        File.destroy({id: products[0].images}).exec(function(err, files) {
          if (err)
            sails.log.warn(err.message);
          if (files)
            removeFiles(files);
        });
      }
      return res.json(products[0]);
    });
  }
};
