const Record = require("../models/RecordListModel.js");
const mongoose = require("mongoose");



//get all records

const getAllRecords = async (req, res) => {
    const records = await Record.find({});

    res.status(200).json(records);


}


//get a single record

const getRecord = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such Record" });
    }

    const record = await Record.findById(id);

    if (!record){
        return res.status(404).json({ error: "Record not found" });
    }

    res.status(200).json(record);

}

//create a new record

const createRecord = async (req, res) => {
    const { team_name, top_scorer } = req.body;

    let emptyFields = [];

    if (!team_name){
        emptyFields.push("team_name");
    }

    if (!top_scorer){
        emptyFields.push("top_scorer");
    }

    if (emptyFields.length > 0){
        return res.status(400).json({ error: 'Please Fill in All Fields', emptyFields });
    }
    
    try{
      const records = await Record.create({ team_name, top_scorer });
      res.status(200).json(records);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }

}


//update a record

const updateRecord = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such Record" });
    }

    const record = Record.findOneAndUpdate({_id: id}, req.body, {
        ...req.body
    });

    if (!record){
        return res.status(404).json({ error: "Record not found" });
    }

    res.status(200).json(record);
}

//delete a record

const deleteRecord = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such Record" });
    }

    const record = await Record.findByIdAndRemove({_id: id});

    if (!record){
        return res.status(404).json({ error: "Record not found" });
    }

    res.status(200).json(record);

}
    


module.exports = {
    createRecord,
    getAllRecords,
    getRecord,
    deleteRecord,
    updateRecord
};