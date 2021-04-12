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
        default: '',
        required: false,
    },
    gender: {
        type: String,
        default: '',
        required: false,
    },
    age: {
        type: String,
        default: '',
        required: false,
    },
    height: {
        type: String,
        default: '',
        required: false,
    },
    weight: {
        type: String,
        default: '',
        required: false,
    },
    isCoach: {
        type: Boolean,
        required: false,
        defaultValue: false,
    },
    coach: {
        type: String,
        defaultValue: "SIN_ASIGNAR",
        required: false // >:v ptm xd
    }
});

module.exports = model('User', userSchema);
