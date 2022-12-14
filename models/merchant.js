/* The below code is creating a schema for the merchant. */
const mongoose = require('mongoose');
// plugin which adds pre-save validation for unique fields within a Mongoose schema.
const uniqueValidator = require('mongoose-unique-validator');

const merchantSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: true,
        unique: true,
    },
    aboutUs: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        minlength: 3,
        required: true,
    },
    location: {
        type: String,
        minlength: 3,
        required: true,
    },
    coord: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        minlength: 8,
    },
    email: {
        type: String,
        minlength: 8,
    },
    lastOnline: {
        type: Number,
        required: true,
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
    password: {
        type: 'String',
        required: true,
    },
});

merchantSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    },
});

merchantSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Merchant', merchantSchema);
