#!/usr/bin/env node
const pjson = require('../package.json');
const {createFile,about,getfiles,history} = require('../index'); // {} will extract only specific functions from index we can also use require('index').sum

if(process.argv.length === 2)        // info about the app to be given  > wnb
{
    console.log(about());
}
else if(process.argv.length === 3){
    const arg = process.argv[2];

    switch(arg){
        case "--version":
            console.log(pjson.version);
            break;

        case "--help":
            console.log(about());
            break;

        case "date":
            const date = new Date(Date.now());
            console.log(date.toString());
            break;

        case "pwd":
            console.log(process.cwd());
            break;

        case "ls":
            getfiles();
            break; 

        default:
            console.log(`wnb: '${arg}' is not a valid command. See 'wnb --help'`);
            break;
    }
}else{
    const arg1 = process.argv[2];
    const arg2 = process.argv[3];

    switch(arg1){
        case "touch":
            createFile(arg2);
            break;

        default:
            console.log(`wnb: '${arg1}' is not a valid command. See 'wnb --help'`);
            break;
    }
}
