const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        default: ''
    },
    age: {
        type: String,
        default: ''
    },
    height: {
        type: String,
        default: ''
    },
    weight: {
        type: String,
        default: ''
    },
    isCoach: {
        type: Boolean,
        required: true,
        defaultValue: false,
    },
    coach: {
        type: String,
        defaultValue: "SIN_ASIGNAR",required: true // >:v ptm xd
    }
});

module.exports = model('User', userSchema);
