const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    first_name : { type: String, require: true },
    last_name : { type: String, require: true },
    mobile: { type: Number, require: true, unique: true },
    email: {type:String, require: true}
}, {
    timestamps: true,
    versionkey: false
})

const User = mongoose.model("user", userSchema)

module.exports = User;