const router = require('express').Router();
let User = require('../models/user.model');

// localhost:5000/users/' ---> get requests
router.route('/').get((req, res) => {
    // Mongoose method that gets a list of all the users from the mongoDB atlas database
    // The find method returns a promise
    User.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json("Error: " + error))
});

// localhost:5000/users/add' ---> post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;

    // Create a new user
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json("User added!"))
    .catch(error => res.status(400).json("Error: " + error));
});

module.exports = router;