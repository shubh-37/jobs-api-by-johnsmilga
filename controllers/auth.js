const register = async (req,res) => {
    res.send('Register user');
}

const login = async (req,res) =>{
    res.send('Login User')
}

module.exports = {
    register,
    login
}