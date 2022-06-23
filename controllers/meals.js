import { Meal } from "../models/meals.js"

function newMeals(req, res) {
    Meal.find({})
    .then(meals => {
        res.render('meals/new', {
            title: 'Add Meal',
            meals

        })
    })
}
function create(req, res){
    Meal.create(req.body)
    .then(Meal => {
        res.redirect('/meals/new')
    })
}

export {
    newMeals as new,
    create,
}