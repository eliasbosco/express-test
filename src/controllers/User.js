const db = require('../models');
const User = db.User;

exports.post = (req, res, next) => {
   console.log('[req.body]: ', req.body);
   const user = new User(req.body);
   console.log('[user]: ', user);
   user.save((err, user) => {
      if (err) {
         res.status(500).json({ message: err });
         return;
      }

      res.status(201).json(user);
    });
 };
  
 exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`User PUT ID: --> ${id}`);
 };
  
 exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`User DELETE ID: --> ${id}`);
 };
  
 exports.get = (req, res, next) => {
    User.find().exec((err, user) => {
      if (err) {
         res.status(500).json({ message: err });
         return;
      }

      res.status(200).json(user);
    });
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`User GET ID: ${id}`);
 };