const db = require('../models');
const User = db.User;

exports.post = (req, res, next) => {
   const user = new User(req.body);
   user.save((err, user) => {
      if (err) {
         res.status(500).json({ message: err });
         return;
      }

      res.status(201).json(user);
   });
};
  
exports.put = (req, res, next) => {
   User.findByIdAndUpdate(req.params.id, req.body, ((err, user) => {
      if (err) {
         res.status(500).json({ message: err });
         return;
      }

      res.status(201).json(req.body);
   }));
};
  
exports.delete = (req, res, next) => {
   User.findByIdAndDelete(req.params.id, ((err, _) => {
      if (err) {
         res.status(500).json({ message: err });
         return;
      }

      res.status(200).json({ message: `Record ID: ${req.params.id} deleted.`});
   }));
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
   User.findById(req.params.id).exec((err, user) => {
      if (err) {
         res.status(500).json({ message: err });
         return;
      }

      res.status(200).json(user);
   });
};