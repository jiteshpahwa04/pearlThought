const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor")
require("dotenv").config()

exports.makeAppointment = async(req, res)=>{
    try{
        const {docId, firstName, lastName, phoneno, email} = req.body;
        
        // create a new appointment
        const newAppointment = await Appointment.create({
            firstName: firstName,
            lastName: lastName,
            phoneno: phoneno,
            email: email,
        })        

        // update the doctor schema
        const doctor = await Doctor.findByIdAndUpdate(
            {_id: docId},
            {
                $push:{
                    appointmentsBooked: newAppointment._id,
                },
            },
            {new: true}
        )

        return res.status(200).json({
            message: "Appointment made !!", 
            data: doctor,
            success: true,
        })
    }catch(err){
        return res.status(500).json({
            message: "Appointment could not be made",
            error: err.message,
            success: false,
        })
    }
}