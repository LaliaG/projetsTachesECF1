const express = require("express");
const isAuthenticated = require("../middlewares/authentication");
const projectController = require("../controllers/projectController");

const router = express.Router();

router.get("/", isAuthenticated,projectController.getAllProject);


router.post("/create",isAuthenticated, projectController.createProject);

router.put("/update/:id",isAuthenticated, projectController.UpdateProject);
router.delete("/delete/:id/:idT",isAuthenticated, projectController.DeleteProject);


module.exports = router;
app.use(express.json()).use("/api/project", projectRoute);

const express = require('express');
const projectController = require('../controllers/projectController');
const isAuthenticated = require('../middleware/auth');

const router = express.Router();

router.post('/create', isAuthenticated, projectController.createProject);
router.get('/user/:userId', isAuthenticated, projectController.getAllProjects);
router.put('/update/:id_project', isAuthenticated, projectController.updateProject);
router.delete('/delete/:id_project',isAuthenticated, projectController.deleteProject);

module.exports = router;
