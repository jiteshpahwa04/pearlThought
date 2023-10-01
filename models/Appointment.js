const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: { 
            type: String,
            required: true,
        },
        phoneno: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
    }
)

module.exports = mongoose.model("Appointment", appointmentSchema);