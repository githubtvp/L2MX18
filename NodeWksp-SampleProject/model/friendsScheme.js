const mongoose = require('mongoose');
const friendSchema = new mongoose.Schema(
    {
        "name" : String, 
        "age" : Number,
        "dob" : Date,
        "native" : String
    }
);
//setter
friendSchema.path('name').set(function(v) {
    return v.toUpperCase();
});
module.exports = mongoose.model("friends", friendSchema);