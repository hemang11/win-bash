const fs = require('fs');
// All the functions are present here for the package

// about the package
exports.about = () => {
    const info = `
    usage: wnb [--version] [--help]

    These are common commands used to perform different functions :

    > wnb <command>

    Commands :
    
    date                :   returns the current date in IST .
    ls                  :   returns all the files present in the current working directory
    pwd                 :   return the path of current working directory
    touch <filename>    :   creates a file in the same directory in which the package is installed
    `;
    return info;
}

// get all the files in current directory
exports.getfiles = ()=>{
    fs.readdir(__dirname, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            console.log(file); 
        });
    });
}

// touch file will create a file with given filename
exports.createFile = (filename) => {
    found = false;
    fs.readdir(process.cwd(),(err,files)=>{
        if(err)console.log(`Err: There is some err finding the file ${err}`);
        files.forEach(file=>{
            if(file === filename){
                found = true;
                console.log('Err: file already exists');
            }
        })
    })
    if(!found)fs.writeFileSync(`${process.cwd()}/${filename}`,'');
}

// The sum function is added just to check the testing using the jest library 
// sum has no role in the package
exports.sum = (a,b)=>{
    return a+b;
}

