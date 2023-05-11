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
    res.status(200).json("Item Added Successfully.");
  } catch (err) {
    res.json(err);
  }
});

//lets create second route -- to get data from databse

router.get("/api/items", async (req, res) => {
  try {
    const AllTodoItems = await todoItemsModel.find({});
    res.status(200).json(AllTodoItems);
  } catch (err) {
    res.json(err);
  }
});

//lets update item

router.put("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and update it

    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Item Updated");
  } catch (err) {
    res.json(err);
  }
});

//lets delete item from database
router.delete("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and update it

    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    res.json(err);
  }
});

//export router
module.exports = router;
