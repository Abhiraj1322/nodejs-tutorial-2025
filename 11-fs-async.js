const { error } = require('console')
const {readFileSync,writeFileSync, readFile, writeFile}=require('fs')
console.log("start")
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)                                 /// if don to provide uitf8 it start buffering
        return
    }
    console.log(result)
    const first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log("done with task")
        const second=result; 
        writeFile('/content/result-async.txt',
            `here is the result:${first},${second}`,
            
        (error,result)=>{
            if(error){
                console.log(error)
                return;
            }
       
        })
    })
})
console.log("starting with next task")