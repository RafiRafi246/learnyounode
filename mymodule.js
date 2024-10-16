  module.exports = (directory, file_ext, callback) => 
  require('fs').readdir(directory, (err, files) => 
        err 
        ? callback(err)
        :callback(
            null,
            files.filter(
           (file) => file.toString().split('.')[1] == file_ext.toString(),
        ),
    ),
    );

