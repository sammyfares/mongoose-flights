import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5}
}, {
    timestamps: true
})

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
    },
    reviews: [reviewSchema],

}, {
    timestamps: true,
})

const Flight = mongoose.model("Flight", flightsSchema)

export {
    Flight
}