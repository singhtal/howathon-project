const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//SECTION  collection and schema for Registration
let MentorSchema = new Schema({
    username: {
        type: String,
        required: [true, "can't be blank"],
    },
    status: {
        type: String,
        required: [true, "cant be blank"],
    },
    totalSlots: {
        type: String,
        required: [true, "cant be blank"],        
    },
    certifications: [
        {
            type: String
        }
    ],
    description: {
        type: String,
    },
    skills: [
        {
            skillname : {  type: String },
            peopleMentored: [{ type: String }], //user id of mentees
            ratingsReceived: [{ type: Number }],
            status: { String }, //active or ended
        }
    ],
    requests: [
        {
            username: { type: String },
            skillName: { type: String },
            status: { type: String }, //accepted, rejected, pending 
        }
    ]

}, {
    collection: 'mentors'
});

module.exports = mongoose.model('mentor', MentorSchema);