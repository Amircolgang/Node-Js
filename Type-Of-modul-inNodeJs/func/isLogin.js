let isLogin = (userName) => {
    if(userName == "admin"){
        return true
    }
    else {
        return false
    }
}   


module.exports = {
    isLogin
}