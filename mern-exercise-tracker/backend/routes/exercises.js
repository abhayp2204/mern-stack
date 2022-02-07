const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// https://localhost:5000/exercises/' ---> get requests
router.route('/').get((req, res) => {
    // Mongoose method that gets a list of all the exercises from the mongoDB atlas database
    // The find method returns a promise
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(error => res.status(400).json("Error: " + error))
});

// https://localhost:5000/exercises/add' ---> post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    // Create a new exercise
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
    .then(() => res.json("Exercise added!"))
    .catch(error => res.status(400).json("Error: " + error));
});

module.exports = router;