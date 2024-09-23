const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const fetchUser = require("./middleware/fetchUser");


const User = require("../model/user");
const { Favourite } = require('../model/lists');
const Order = require('../model/orders')
const { Brand } = require('../model/home')

/* Index Page Lazy Loading Response API */ 
router.get('/frequent', async (req, res) => {
    try {
        const data = await FreqPurchasedListFinder();
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
        res.status(500).send({msg: "Internal Server Error"});
    }
})

router.get('/lessPrice', async (req, res) => {
    try {
        const data = await lessPriceListFinder();
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
        res.status(500).send({msg: "Internal Server Error"});
    }
})

router.get('/topDesign', async (req, res) => {
    try {
        const data = await TopInDesignsListFinder();
        res.status(200).send(data);
    } catch (error) {
        console.log(error)
        res.status(500).send({msg: "Internal Server Error"});
    }
})

router.get('/brands', async (req, res) => {
    try {
        const brands = await Brand.find().sort({ updatedAt: -1 }).exec();
        res.status(200).send(brands);

    } catch (error) {
        console.log(error)
        res.status(500).send({msg: "Internal Server Error"});
    }
})

/* Profile page response, Data about user */
router.get('/favourite', fetchUser, async (req, res) => {
    let userId = (req.user != null) ? req.user.id : new mongoose.Types.ObjectId('5f56a08d8d22222222222222');
    try {
        const favList = await Favourite.findOne({ user_id: userId });
        if (favList) {
            let favProducts = await dataByModelNo(favList.modelNums);
            res.status(200).send(favProducts);
        } else {
            res.status(200).send([]);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({msg: "Internal Server Error"});
    }
});

router.get('/orders', fetchUser, async (req, res) => {
    let userId = (req.user != null) ? req.user.id : new mongoose.Types.ObjectId('5f56a08d8d22222222222222');
    const user = await User.findById(userId).select("-password");
    try {
        if (!user) {
            return res.status(200).send({ msg: "You have not signed in correctly!" });
        }

        const orders = await Order.find({ user_id: userId }).sort({ orderDate: -1 }).exec();

        res.status(200).send(orders);

    } catch (error) {
        console.log(error)
        res.status(500).send({msg: "Internal Server Error"});
    }
})

module.exports = router;
