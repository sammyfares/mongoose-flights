import { Flight } from "../models/flights.js"
import { Meal } from '../models/meals.js'

function newFlight(req, res){
res.render("flights/new", {
    title: 'newflight'
})
}
function create(req, res){
    Flight.create(req.body)
    .then(flight => {
        console.log(flight)
        res.redirect(`/flights`)
    })
    .catch(error => {
        console.log(error)
        res.redirect('/flights')
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
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
}
function show(req, res){
    Flight.findById(req.params.id)
    .populate('meals')
    .then(flight => {
        Meal.find({_id: {$nin: flight.meals}})
        .then(meals => {
            console.log(flight, 'Hello')
            console.log(meals, "yooo")
            res.render("flights/show", {
                flight: flight,
                title: 'Flight Detail',
                meals: meals
            })
        })
        
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })


}
function deleteFlight(req, res) {
    Flight.findById(req.params.id)
    .then(() => {
        res.redirect("/flights")
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
}
function edit(req, res) {
    Flight.findById(req.params.id)
    .then(flight => {
        res.render("flights/edit", {
            flight: flight,
            title: "Edit movie"
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
}
function update(req, res){
    Flight.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(flight => {
        console.log(flight)
        res.redirect(`/flights/${flight._id}`)
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
}
function createTicket(req, res){
    Flight.findById(req.params.id)
    .then(flight => {
        flight.tickets.push(req.body)
        flight.save()
        .then(() => {
            res.redirect(`/flights/${flight._id}`)
        })
    })
    .catch(error => {
        console.log(error)
        res.redirect('/')
    })
}
function addMeal(req, res){
    Flight.findById(req.params.id)
    .then(flight => {
        flight.meals.push(req.body.meals)
        flight.save()
        .then(() => {
            res.redierct(`/flights/${movie._id}`)
        })
    })
}

export {
    newFlight as new,
    create,
    index,
    show,
    deleteFlight as delete,
    edit,
    update,
    createTicket,
    addMeal,

}