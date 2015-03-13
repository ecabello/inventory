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
		sails.log.info("Uploading file " + uploadFile + "...")

		// To upload to custom folder pass {dirname: '../../assets/images'}
		// as the first parameter. For more options check https://github.com/balderdashy/skipper.
		// If dirname is not set the upload will be done to ./tmp/uploads
		uploadFile.upload(function onUploadComplete(err, files) {
			if (err)
				return res.serverError(err);

			sails.log.info(files);
			return res.json({status:200,file:files});
		});
	}
};
