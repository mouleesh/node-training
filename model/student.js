import mongoose from "mongoose";
 
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    city: {
        type: String,
    },
    is_graduate:{
        type: Boolean,
        default: false
    },
    created_at: { type: Date },
    updated_at: { type: Date, default: Date.now },
});
 
const studentModel = mongoose.model("students", studentSchema);

export default studentModel;