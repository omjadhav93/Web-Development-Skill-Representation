const express = require("express");
const router = express.Router();
const fetchUser = require("./middleware/fetchUser")
const mongoose = require('mongoose')

const User = require("../model/user");
const { Favourite } = require("../model/lists");
const Order = require("../model/orders");

const products = require("../model/products");

router.get("/product", fetchUser, async (req, res) => {
  let userId = (req.user != null) ? req.user.id : new mongoose.Types.ObjectId('5f56a08d8d22222222222222');
  const user = await User.findById(userId).select("-password");
  try {
    const modelNo = req.query.modelNo;
    await products.updateOne({ "model-number": modelNo },{$inc: {"visiter-count": 1}}) // This is to increase the visitor count of that product as this user is going to visit it.
    const productData = await products.findOne({ "model-number": modelNo });
    if(!productData){
      return res.status(404).send("Something went wrong. Product not found!");
    }

    // Rendering Files
    if (user) {
      const favList = await Favourite.findOne({ user_id: userId }); // This is to check that the user had added this product to it's favourite's list or not.
      res.render("product.pug", {
        LoggedIn: 1, Seller: user.seller,
        data: productData,
        fav: favList ? (favList.modelNums.includes(modelNo)) : false
      });
    } else {
      res.render("product.pug", { data: productData });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
