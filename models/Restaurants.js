const mongoose = require("mongoose");
const Joi = require("joi");


const RestaurantsSchema = new mongoose.Schema({
    name: String,
    type: String,
    tags: Array,
    location: String,
    distance: Number,
    time: Number,
    images: Array,
    categories: Array
})

const RestaurantsModal = mongoose.model("restaurants", RestaurantsSchema);

exports.RestaurantsModal = RestaurantsModal;

exports.validRestaurants = (_bodyData) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(2).max(99).required(),
        type: Joi.string().min(2).max(99).required(),
        location: Joi.string().min(2).max(99),
        distance: Joi.number().min(2).max(99).required(),
        time: Joi.number().min(2).max(9999).required(),
    })

    return joiSchema.validate(_bodyData);
}