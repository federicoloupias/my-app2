const express = require ('express');
const router = express.Router();
const bcrypt = require ('bcryptjs');
const config = require('config');
const jwt = require ('jsonwebtoken');
const auth = require ('../../middleware/auth');

// User Model
const User = require ('../../models/user');

// POST Auth User
// api/auth

router.post('/', (req,res) => {
    const { email, password } = req.body;

    // Simple validation
    if(!email || !password){
        return res.status(400).json({ msg: 'Please enter all fields '});
    }

    // Check exsisting user

    User.findOne ({ email })
        .then(user => {
            if(!user) return res.status(400).json({ msg: 'User does not exists '});

            

            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});

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

                })
            



        })




});


// GET User Data
// api/auth

router.get('/user', auth, (req,res) => {
    console.log(req.user)
    User.findById(req.user.is)
        .select('-password')
        .then(user => res.json(user));
})


module.exports = router;