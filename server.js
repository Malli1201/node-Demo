var { promisify }=require('util');
var fs=require('fs');
var writeFile=promisify(fs.writeFile);
var removeFile=promisify(fs.unlink) ;


var delay= (seconds)=> new Promise((resolves)=>{

    setTimeout(resolves,seconds*1000);
});

var beep=()=> process.stdout.write("\X07");

const sequentialDemo= async()=>{

    console.log("starting");
    await delay(2);
    console.log("write contents");
    await writeFile('sample.txt','welcome to my wold');
    beep();
    console.log("file created with sample.txt");
    await delay(2);
    console.log("unlink the file now");
    await removeFile('sample.txt');
    beep();
    console.log("File removed");


}

sequentialDemo();
