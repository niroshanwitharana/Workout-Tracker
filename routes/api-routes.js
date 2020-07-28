const db = require('../models/model');

module.exports = (app) => {
 
    app.get('/api/workouts', (req, res) =>{
        db.find({})
        .then(workout => {
            res.json(workout)
        })
        .catch(error => {
            res.json(error)
        }
        )
    })

    app.post('/api/workouts', ({body}, res) => {
        const data = body;
        db.create(data)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
    })

    app.put('/api/workouts/:id', (req, res) => {
        db.update({_id: req.params.id}, {$push: {exercises: req.body}})
        .then(updated => {
            res.json(updated)
        })
        .catch(err => {
            console.log(err);
        })
    })

    app.get('/api/workouts/range', (req, res) => {
        db.find({})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        })
    })
}