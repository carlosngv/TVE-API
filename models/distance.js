const { Schema, model } = require('mongoose');

const distanceSchema = new Schema({
    distance: {
        type: String,
        required: false
    },
    username: {
        type: String,
    }
},
    { timestamps: true }
);

module.exports = model('Distance', distanceSchema);
