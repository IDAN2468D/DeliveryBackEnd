const express = require("express");
const { RestaurantsModal, validRestaurants } = require("../models/Restaurants");
const router = express.Router();
const cors = require("cors");

router.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

router.get("/", async (req, res) => {
    const data = await RestaurantsModal.find({});
    res.json(data);
})

router.post("/post", async (req, res) => {
    const validBady = validRestaurants(req.body);
    if (validBady.error) {
        return res.status(400).json(validBady.error.details);
    }
    const food = new RestaurantsModal(req.body);
    await food.save();
    res.json(food);
})

router.delete("/:idDel", async (req, res) => {
    try {
        const data = await RestaurantsModal.deleteOne({ _id: req.params.idDel });
        res.json(data);
    }
    catch {
        console.log(err)
        res.status(400).send(err)
    }
})

router.put("/:idEdit", async (req, res) => {
    const validBady = validRestaurants(req.body);
    if (validBady.error) {
        return res.status(400).json(validBady.error.details);
    }
    try {
        const data = await RestaurantsModal.updateOne({ _id: req.params.idEdit }, req.body);
        res.json(data);
    }
    catch {
        console.log(err)
        res.status(400).send(err)
    }
})

module.exports = router;
