const fs = require('fs')

fs.writeFile("./note.txt" , "\nAmir Shirazi" , {flag : "a" } ,(err) => {
    if(err){
        throw err
    }
    console.log("writeFile Is Succes Fully :)")
})