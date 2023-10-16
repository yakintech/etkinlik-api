const { default: mongoose } = require("mongoose");

const AdminUserSchema = new mongoose.Schema({
    email: String,
    password: String,
},
    {
        timestamps: true
    })


const AdminUser = mongoose.model("admin", AdminUserSchema);

module.exports = {
    AdminUser,
};