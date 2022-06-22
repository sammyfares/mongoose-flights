import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightsSchema = new Schema({
    airline: {
        type: String,
        enum: ["American", "Southwest", "United"],
        
    },
    airport: String,
    flightNo: Number,
    departs: {
        type: Date,
        default: function () {
            return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
        },
    }

}, {
    timestamps: true,
})

const Flight = mongoose.model("Flight", flightsSchema)

export {
    Flight
}