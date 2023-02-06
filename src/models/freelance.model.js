const mongoose = require('mongoose');

const FreelanceSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    socialReason: {
        type: String, 
        required: false,
        default: 'Freelance', 
        trim: true
    },
    socialStatus: {
        type: String,
        enum: ['EI','EURL'],
        required: false,
        default: 'EI',
        trim: true
    },
    dailyRate: {
        type: Number, 
        required: true,
        min: 200,
        max: 1000,
        default: 10
    },
    yearsOfExperience: {type: Number, required: true},
    skills: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill',
        required: true,
    }],
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true,
    }],
});

module.exports = mongoose.model('Freelance', FreelanceSchema);
