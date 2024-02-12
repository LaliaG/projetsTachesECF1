const express = require("express");
//const isAuthenticated = require("../middlewares/authentication");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/", userController.getAllUsers);
router.post("/add-user", userController.createUser);
router.get('/protectedRoute', isAuthenticated, (req, res) => {
    res.send('Route protégée accessible')
  })
//router.get("/profile", isAuthenticated, authController.profile);

module.exports = router;




