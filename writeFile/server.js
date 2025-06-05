const fs = require('fs')

fs.writeFile("./note.txt" , "Amir Shirazi" , (err) => {
    if(err){
        throw err
    }
})