// fs Module

const fs = require('fs')

// console.log(fs)

//Read a file synchronously
function syncDemo() {
    try {
        let contents = fs.readFileSync("09-file1.txt", "utf-8")
        console.log(contents)

        // writing into the file synchronously
        fs.writeFileSync("09-file2.txt", contents)
    }
    catch (err) {
        if (err.code == 'ENOENT') {
            console.log('File not found')
        } else {
            console.log(err)
        }
    }
}

//Read a file asynchronously
function asyncDemo(){
    let contents=""
    try {
        //read a file asychronously
        fs.readFile("09-file1.txt","utf-8",(err,data)=>{
           if(err) throw err;
           
            contents= data
            console.log('I have read the file')
            // console.log(contents)
       
            //writing into the file asynchorously
            console.log('I am writing into the file')
            fs.writeFileSync("09-file2.txt",contents)
        
            fs.appendFile("09-file2.txt","\n************",(err)=>{
                if(err) throw err;
                console.log('Data appended successfully')
            })
        })
    } catch (err) {
        if(err.code ==  'ENDENT'){
            console.log('File not found')
        }else{
            throw err
        }   
    }
}
//Delete a  file
function deleteDemo(){

    fs.unlink("09-file2.txt",(err)=>{
        if(err) throw err;
        console.log('File deleted successfully')
    })
}
// Create directory
function createDir(){
    fs.mkdir('new-dir',(err)=>{
        if (err) throw err;
        console.log('Directory created successfully')
    })
}
// Delete a directory
function deleteDir(){
    fs.rmdir("new-dir",(err)=>{
        if(err) throw err;
        console.log("Directory Deleted successfully")
    })
}

// asyncDemo()
// syncDemo()
// deleteDemo()
// createDir()
deleteDir()