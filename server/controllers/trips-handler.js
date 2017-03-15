const Trips = require('../models/trips');

exports.getTrips = function (req, res) {
  if (!req.params.username) {
    Trips.find()
    .then(trips => res.status(200).send(trips))
    .catch(e => res.status(422).send({ error: 'Cannot get trips' }));
  } else {
    Trips.find({ username: req.params.username })
    .then(trips => res.send(trips))
    .catch(e => res.status(422).send({ error: 'Cannot get trips' }));
  }
};

exports.postTrips = function (req, res) {
  console.log(req.body);
  const { name, username, locations, description, names, tips, images } = req.body;
  const trip = new Trips({ name, username, locations, description, names, tips, images });
  trip.save().then(trip => res.status(200).send(trip));
};
