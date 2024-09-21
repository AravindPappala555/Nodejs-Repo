const fs = require('fs') 
const util = require('util') 
  
// Convert callback based methods to promise 
// based methods 
const readDir = util.promisify(fs.readdir) 
const rename = util.promisify(fs.rename) 
   
readDir(process.cwd()) 
.then(files => { 
  console.log(`Contents before rename operation: `) 
       
  // Contents of the current directory 
  for(let file of files) { 
    console.log(file) 
  } 
   
  console.log('\nAttempt to rename file : \n') 
    
  // Rename operation 
  return rename('testFile.txt', 'test') 
}) 
   
.then(() => { 
  
  // The process.cwd() gives current  
  // working directory 
  return readDir(process.cwd()) 
}) 
   
.then(files => { 
  console.log(`Contents after rename operation: `) 
    
  // Contents of the current directory 
  for(let file of files) { 
    console.log(file) 
  } 
}) 
  
.catch(err => { 
   console.log(`Error occurs,  
   Error code -> ${err.code},  
   Error No -> ${err.errno}`); 
}) 