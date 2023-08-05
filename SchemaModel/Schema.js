const mongoose = require('../db');

const Schema = mongoose.Schema;

const StudSchema = Schema({
    
    Job_role: { type: String, default:'junglebook' },
    Job_loc:{type:String},
    Job_type: { type: String },
    Job_sal: { type: Number },
    createdAt: Date,
    updatedAt: Date,
});
