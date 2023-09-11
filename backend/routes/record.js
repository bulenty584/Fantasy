const express = require("express");
const mongoose = require("mongoose");

const { 
  createRecord,
  getAllRecords,
  getRecord,
  updateRecord,
  deleteRecord
} = require("../controllers/RecordController.js");

const Record = require("../models/RecordListModel.js");



const router = express.Router();
const bodyParser = require("body-parser");

// This section will help you get a list of all the records.
router.get("/", getAllRecords);

// This section will help you get a single record by id

router.get("/:id", getRecord);



// This section will help you create a new record.

router.post("/", createRecord);


// This section will help you update a record by id.

router.patch("/:id", updateRecord);


// This section will help you delete a record

router.delete("/:id", deleteRecord);


module.exports = router;