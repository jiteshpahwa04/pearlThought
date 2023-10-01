const mongoose = require("mongoose");
const Appointment = require("./Appointment");

const docSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: { 
            type: String,
            required: true,
        },
        specialization: {
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
        totalAppointments: {
            type: Number,
            required: true,
        },
        appointmentsBooked: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: Appointment
            }
        ],
        password: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
)

module.exports = mongoose.model("Doctor", docSchema);