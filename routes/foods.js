const express = require("express");
const { FoodsModal, validFoods } = require("../models/FoodsModal");
const router = express.Router();
const cors = require("cors");

router.use(cors({
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

router.get("/", async (req, res) => {
    const data = await FoodsModal.find({});
    res.json(data);
})

router.post("/post", async (req, res) => {
    const validBady = validFoods(req.body);
    if (validBady.error) {
        return res.status(400).json(validBady.error.details);
    }
    const food = new FoodsModal(req.body);
    await food.save();
    res.json(food);
})

router.delete("/:idDel", async (req, res) => {
    try {
        const data = await FoodsModal.deleteOne({ _id: req.params.idDel });
        res.json(data);
    }
    catch {
        console.log(err)
        res.status(400).send(err)
    }
})

router.put("/:idEdit", async (req, res) => {
    const validBady = validFoods(req.body);
    if (validBady.error) {
        return res.status(400).json(validBady.error.details);
    }
    try {
        const data = await FoodsModal.updateOne({ _id: req.params.idEdit }, req.body);
        res.json(data);
    }
    catch {
        console.log(err)
        res.status(400).send(err)
    }
})

module.exports = router;
