const router = require("express").Router();

//import todo model

const todoItemsModel = require("../models/todoItems");

router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
    });
    //save this item in database we must use async - await when dealing with promises and database

    const saveItem = await newItem.save();
    res.status(200).json("Item Added Successfully");
  } catch (err) {
    res.json(err);
  }
});



//export router
module.exports = router 