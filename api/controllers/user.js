const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  // there should be a user object set on req
  // use that req.user object to create a user and save it to our Mongo instance.
  const { username } = req.body;
  const password  = req.userpw;
  const newUser = new User({username, password});
  newUser.save()
    .then(savedUser => {
    	res.json(savedUser)
    })
    .catch(err => {
    	res.status(422).json({err: 'must provide both username and password'})
})
};

module.exports = {
  createUser
};
