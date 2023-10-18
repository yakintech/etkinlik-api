const { AdminUser } = require("../models/AdminUser")

const adminUserController = {
    getAll: async (req, res) => {
        var adminUsers = await AdminUser.find();
        return res.json(adminUsers)
    },
    add: async (req, res) => {
        try {
            const { email, password } = req.body;

            var adminUser = new AdminUser({
                email,
                password
            });

            adminUser.save();

            res.json(adminUser);

        } catch (error) {
            console.log('ERROR', error);
            res.status(500).json(error);
        }
    },
    getById: async (req, res) => {

        const { id } = req.params;

        try {
            var adminUser = await AdminUser.findById(id);

            if (adminUser)
                res.json(adminUser)
            else
                res.status(404).json({ "message": "Admin user not found!" })
        } catch (error) {
            res.status(500).json(error)
        }

    },
    deleteById: async (req, res) => {
        const { id } = req.params;

        try {
            var result = await AdminUser.findByIdAndRemove(id);
            console.log(result);
            res.json(result)
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = {
    adminUserController
}




const mongoose = require("mongoose");



