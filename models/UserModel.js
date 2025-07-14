import mongoose from "mongoose";

const MERNUser = mongoose.Schema({      // create schema

    name: {
        type: String,
        required: true // to make the field required
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

export default mongoose.model('MERNUser', MERNUser); // export the model with the name 'MERNUser' and the schema 'MERNUser' is showing in databse collection as 'MERNUser'