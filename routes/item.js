const express = require("express");
const itemControllers = require("../controllers/item")

const router = express.Router();

router.post("/add-item",itemControllers.postItemData);
router.get("/get-item",itemControllers.getItemData);
router.delete("/delete-item/:id",itemControllers.postDeleteData);

router.put("/edit-item1/:id",itemControllers.putItemData1);
router.put("/edit-item2/:id",itemControllers.putItemData2);
router.put("/edit-item3/:id",itemControllers.putItemData3);





module.exports = router;