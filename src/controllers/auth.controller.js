const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const Freelancer = require('../models/freelance.model');
const Company = require('../models/company.model');

/*
    * @route   POST api/auth/register/freelancer
    * @desc    Register an user and new freelancer 
    * @access  Public  
*/
exports.register_Freelancer = async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.user.password, 10);
    const newUser = new User({
        email: req.body.user.email,
        password: hashedPassword,
        lastName: req.body.user.lastName,
        firstName: req.body.user.firstName,
        address: {
            street: req.body.user.address.street,
            city: req.body.user.address.city,
            zipCode: req.body.user.address.zipCode,
            country: req.body.user.address.country,
        },
        phoneNumber: req.body.user.phoneNumber,
        isAdmin: false,
        isFreelancer: true,
        isCompany: false,
        Company: null,
        Freelancer: null,
    });
    const newFreelancer = new Freelancer({
        user: newUser._id,
        socialReason: req.body.freelance.socialReason,
        socialStatus: req.body.freelance.socialStatus,
        dailyRate: req.body.freelance.dailyRate,
        yearsOfExperience: req.body.freelance.yearsOfExperience,
        skills: null,
        jobs: null,
    });

    console.log(newUser);
    if (newUser.isFreelancer || newUser.Freelancer === null) {
        try {
            newFreelancer.save().then((freelancer) => {
                newUser.Freelancer = freelancer._id;
                newUser.save()
                .then((user) => {
                    let userToken = jwt.sign({
                        id : user._id,
                        isAdmin : user.isAdmin,
                        isFreelancer : user.isFreelancer,
                        isCompany : user.isCompany ? user.isCompany : false,
                    }, 
                    process.env.SECRET_KEY,
                    );
                    res.status(201).send({
                        message: 'User and Freelancer created successfully',
                        auth : true,
                        token: userToken,
                    });
                });
            });
        } catch (error) {  
            console.log(error);
            res.status(500).send({
                message: 'Error while creating user and freelancer',
                auth : false,
                token: null,
            });
        }
    } else {
        res.status(400).send({
            message: 'User is not a freelancer',
            auth : false,
            token: null,
        });
    }
};

exports.register_User_inCompany = async (req, res) => {};

exports.login = async (req, res) => {};

exports.logout = async (req, res) => {};

exports.password_reset = async (req, res) => {};
exports.password_forgot = async (req, res) => {};

