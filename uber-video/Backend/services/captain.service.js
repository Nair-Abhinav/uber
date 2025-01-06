const captainModel = require('../models/captain.model');


module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    console.log("Creating captain with:", { firstname, lastname, email  , color, plate, capacity, vehicleType});
    const captain =await  new captainModel({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    const savedCaptain = await captain.save();
    console.log("Captain created:", savedCaptain);
    return captain;
}