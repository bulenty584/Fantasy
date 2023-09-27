const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
    team_name: {
        type: String,
        required: true,
    },
    top_scorer: {
        type: String,
        required: true,
    },
    formation: {
        type: String,
        required: true,
    },   
},

{
collection: "Premrecord"
});

const Record = mongoose.model("Record", RecordSchema);
module.exports = Record;
