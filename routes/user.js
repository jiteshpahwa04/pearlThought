const express = require("express");
const router = express.Router();

const {
    getAllDoctors,
    getDoctor,
} = require("../controllers/Doctor");

const {
    makeAppointment
} = require("../controllers/Appointment")

// All the three endpoints

router.get("/getDoctors", getAllDoctors)
router.get("/getDoctor", getDoctor)
router.post("/makeAppointment", makeAppointment)

// Export the router for use in the main application
module.exports = router