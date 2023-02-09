const express = require("express");

const router = express.Router();
const authController = require("../controllers/auth.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post("/register/freelancer", authController.register_Freelancer);
router.post("/register/user_inCompany", authController.register_User_inCompany);
router.post("/login", authController.login);
router.put("/user/reset_password", verifyToken, authController.password_reset);
router.get("/user/logout", authController.logout);

// router.post("/register", authController.register);




module.exports = router;
