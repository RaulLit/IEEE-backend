const Register = require('../models/Register');

module.exports.registerUser = async (req, res) => {
    const body = req.body;
    
    // Empty check
    let emptyFields = [];
    if(!body.name) emptyFields.push('name');
    if(!body.email) emptyFields.push('email');
    if(!body.phone) emptyFields.push('phone');
    if(!body.prn) emptyFields.push('prn');
    if(!body.branch) emptyFields.push('brnch');
    if(emptyFields.length > 0) {
        res.status(400).json({error: 'Please fill in all the fields', emptyFields});
    }

    // Add to database
    try {
        const register = await Register.create(body);
        res.status(200).json({message: "You have Registered Successfully"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}