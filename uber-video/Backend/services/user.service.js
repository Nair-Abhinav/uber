const userModel = require('../models/user.model');

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }

    console.log("Creating user with:", { firstname, lastname, email });

    // Using the new User() method
    const user = new userModel({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });

    // Saving the user to the database
    const savedUser = await user.save();

    console.log("User created:", savedUser);
    return savedUser;
};
