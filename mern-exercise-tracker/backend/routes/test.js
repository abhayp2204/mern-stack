const router = require('express').Router();
const Exercise = require('../models/exercise.model');
const { route } = require('./exercises');

router.route('/').get((req, res) => {    
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(error => res.status(400).json("Error: " + error));
});