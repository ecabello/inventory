/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	upload: function (req, res) {
		// No Get allowed
		if(req.method === 'GET')
			return res.json({'status':'GET not allowed'});

		var uploadFile = req.file('uploadFile');

		// To upload to custom folder pass {dirname: '../../assets/images'}
		// as the first parameter. For more options check https://github.com/balderdashy/skipper.
		// If dirname is not set the upload will be done to ./tmp/uploads
		uploadFile.upload({dirname: '../../assets/images'}, function onUploadComplete(err, files) {
			if (err)
				return res.serverError(err);

			var async = require('async');
			var queue = async.queue(function(task, callback) {
				File.create({
					owner: req.user.id,
					filename: task.file.filename,
					url: 'images/' + require('path').basename(task.file.fd),
					size: task.file.size,
					type: task.file.type,
					temporary: true
				}, callback);
			}, 2);

			var savedFiles = [];

			// this is the queue's callback, called when the queue is empty,
			queue.drain = function() {
  			  return res.json({status: 200, files: savedFiles});
			};

			sails.log.info(files);
			for (var i=0; i<files.length; i++) {
				queue.push({ file: files[i] }, function(err, file) {
					if (err)
						sails.log.info(err);
					if (file) {
					    var fs = require('fs');
					    //fs.symlinkSync('assets/' + file.url, '.tmp/public/' + file.url);
					    fs.writeFileSync('.tmp/public/' + file.url, fs.readFileSync('assets/' + file.url));
						savedFiles.push(file);
					}
				});
			}
		});
	},

	myFiles: function(req, res) {
		File.find({owner: req.user.id}).exec(function(err, files) {
			if (err)
        return res.serverError(err.message);

      return res.json(files);
    });
	}
};
