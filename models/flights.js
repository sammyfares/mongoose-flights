import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: {type: Number, min: 0}
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
    tickets: [ticketSchema],
    meals: [{type: Schema.Types.ObjectId, ref: "Meal"}]

}, {
    timestamps: true,
})

const Flight = mongoose.model("Flight", flightsSchema)

export {
    Flight
}