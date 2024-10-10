const fs = require('fs');

fs.readdir(process.argv[2], (err, files) {
    err ? console.log('Error Reading directory: ', err) :
        files.forEach(file => {
            if (file.split('.')[1] == process.argv[3])
             console.log(file);
        });
});