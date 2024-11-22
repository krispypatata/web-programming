const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/GAMES', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));


const Game = mongoose.model('Game', {
    title: { type: String, required: true },
    developer: { type: String, required: true },
});

exports.findAll = (req, res, next) => {
  Game.find((err, games) => {
    if (!err) { res.send(games) }
  })
}

exports.findById = (req, res, next) => {
  if (!req.query.id) { return res.send('No id provided') }

  Game.findOne({ _id: req.query.id}, (err, game) => {
    if (!err) { res.send(game) }
  })
}

exports.findByTitlePOST = (req, res, next) => {
  console.log('find by post')
  console.log(req.body)
  if (!req.body.title) { return res.send('No title provided') }

  Game.findOne({ title: req.body.title}, (err, game) => {
    if (!err) { res.send(game) }
  })
}

exports.add = (req, res, next) => {
  const newGame = new Game({
    title: req.body.title,
    developer: req.body.developer,
  });

  newGame.save((err) => {
    if (!err) {
      res.status(201).json(newGame);  
    } else {
      res.status(500).json({ message: 'Unable to save game', error: err });
    }
  });
};


exports.deleteById = (req, res, next) => {
  Game.findOneAndDelete({ _id: req.body.id }, (err, game) => {
    if (!err && game) {
      res.send('Successfully deleted ' + game.title)
    }
    else {
      res.send('Unable to delete game')
    }
  })
}
