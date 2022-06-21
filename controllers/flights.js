import { Flight } from "../models/flights.js"

function newFlight(req, res){
res.render("flights/new", {
    title: 'newflight'
})
}
function create(req, res){
    Flight.create(req.body)
    .then(flight => {
        console.log(flight)
        res.redirect(`/flights/new`)
    })
    .catch(error => {
        console.log(error)
        res.redirect('/flights/new')
    })
}

function index(req, res){
    Flight.find({})
    .then(flights => {
        res.render("flights/index" , {
            flights: flights,
            title: "All Flights",
        })
    })
}

export {
    newFlight as new,
    create,
    index,

}