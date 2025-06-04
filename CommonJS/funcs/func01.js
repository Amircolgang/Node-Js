let userCheck = (userName) => {
    if(userName == "admin"){
        return true
    }
    else {
        return false
    }
}   


module.exports.userCheck = userCheck