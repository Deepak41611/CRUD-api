const db = require('../model')
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('../config/key')
const User = db.user

exports.signin = (req,res)=>{
   User.find({email:req.body.email})
      .exec()
      .then(user=>{
          if(user.length<1){
            return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user[0].password
            );
      
            if (!passwordIsValid) {
              return res.status(401).send({ message: "Invalid Password!" });
            }
            var token = jwt.sign({ id: user.id }, config.secret, {
              expiresIn: 86400, // 24 hours
            });

            res.status(200).json({
                username:user.name,
                email:user.email,
                token:token  
            })
      })
      .catch(err=>{
          res.status(500).json({
              message:"unexpected error"
          })
      })
 }