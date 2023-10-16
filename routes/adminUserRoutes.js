const express = require("express");
const { adminUserController } = require("../controllers/adminUserController");
const router = express.Router();


router.post('/', adminUserController.add);
router.get('/', adminUserController.getAll);





module.exports = router;