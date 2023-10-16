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
            res.status(500).json(error);
        }
    }
}

module.exports = {
    adminUserController
}