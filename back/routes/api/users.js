const express = require ('express');
const router = express.Router();
const bcrypt = require ('bcryptjs');
const config = require('config');
const jwt = require ('jsonwebtoken');

// User Model
const User = require ('../../models/user');

// POST all Users
// api/users
router.post('/', (req,res) => {
    const { name, email, password, firstName, lastName, country } = req.body;

    // Simple validation
    if(!name || !email || !password || !firstName || !lastName || !country){
        return res.status(400).json({ msg: 'Please enter all fields '});
    }

    // Check exsisting user

    User.findOne ({ email })
        .then(user => {
            if(user) return res.status(400).json({ msg: 'User already exists '});

            const newUser = new User ({
                name,
                email,
                password,
                firstName,
                lastName,
                country
            });

            //Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                { is: user.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                                }
                            )

                           
                        });
                })
            })



        })




})

module.exports = router;