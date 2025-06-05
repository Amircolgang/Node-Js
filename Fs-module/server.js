const fs = require('fs')

// fs.readFile('./name.txt',(err , data )=>{
//     if(err){
//         throw err
//     }
//     console.log(
//         `Your Readed File Is : \n ${data}`
//     )
// })

fs.readFile('users.json' , (err , data)=> {
    if(err){
        throw err
    }
    console.log(JSON.parse(data))
})
