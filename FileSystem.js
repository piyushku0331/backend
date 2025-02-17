const fs=require("fs")

//blocking task
console.log("File is being created.....");
fs.writeFileSync("syncFile.txt","We have created a file named syncFile")

//non blocking task
fs.writeFile("asyncFile.txt","Written in asyncFile",(error,result)=>{
    if (error){
        console.log(error);
    }
    else{
        console.log("fileAsync created...");
    }
})
console.log("fileSync created successfully");
const data=fs.readFile("asyncFile.txt","utf-8",(err,result)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})
console.log(data);
fs.rename("asyncFile.txt","file2.txt",(err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("File renamed successfully");
    }
})
// fs.unlink("file1.txt",(err)=>{
//     if (err){
//         console.log(err);
//     }
// })
