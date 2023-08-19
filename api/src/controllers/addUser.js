const { User } = require('../db');

const addUser = async (req,res) =>{
    try{
        const {username,email,password_hash} = req.body;
        const newUser = await User.create({username,email,password_hash})
        res.status(200).send(`Usuario ${username} agregado con exito`);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports = addUser;
