let userCheck = (userName) => {
    if(userName == "admin"){
        return true
    }
    else {
        return false
    }
}   

let num = 16

module.exports = {
    num , 
    userCheck
}