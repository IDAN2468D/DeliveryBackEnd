const mongoose = require("mongoose");
const Joi = require("joi");


const FoodsSchema = new mongoose.Schema({
    id: String,
    restaurantId: String,
    name: String,
    price: Number,
    image: String,
    category: String,
    description: String,
    ingredients: String,
})

const FoodsModal = mongoose.model("foods", FoodsSchema);

exports.FoodsModal = FoodsModal;

exports.validRestaurants = (_bodyData) => {
    let joiSchema = Joi.object({
        name: Joi.string().min(2).max(99).required(),
        price: Joi.number().min(2).max(9999).required(),
        category: Joi.string().min(2).max(99).required(),
        description: Joi.string().min(2).max(99).required(),
        ingredients: Joi.string().min(2).max(99).required()
    })

    return joiSchema.validate(_bodyData);
}