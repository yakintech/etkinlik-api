const express = require("express");
const { adminUserController } = require("../controllers/adminUserController");
const router = express.Router();


router.post('/', adminUserController.add);
router.get('/', adminUserController.getAll);
router.get('/:id', adminUserController.getById);
router.delete('/:id', adminUserController.deleteById);







module.exports = router;