const Doctor = require("../models/Doctor")
require("dotenv").config()

exports.getAllDoctors = async(req, res)=>{
    try{
        console.log("Finding Doctors");
        const allDoctors = await Doctor.find({});
        const availableDocs = allDoctors.filter((doc => doc.totalAppointments-doc.appointmentsBooked.length > 0));
        return res.status(200).json({
            data: availableDocs,
            success: true,
        })
    }catch(err){
        return res.status(500).json({
            message: "Doctors not found",
            success: false,
        })
    }
}

exports.getDoctor = async(req, res)=>{
    try{
        const {id} = req.body;
        console.log(id);
        const docInfo = await Doctor.find({_id: id});
        return res.status(200).json({
            data: docInfo,
            success: true,
        })
    }catch(err){
        return res.status(500).json({
            message: "Doctor info could not be found",
            success: false,
        })
    }
}