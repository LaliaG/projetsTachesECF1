const express = require("express");
const DB = require("./config/db");
const taskController = require("./routes/taskController");

const router = express.Router();

router.get("/", taskController.getAllTaks);
router.post("/add-task", taskController.createTask);
router.get("/:id", isAuthenticated,projectController.getTask);
router.post("/create-task/:id",isAuthenticated, projectController.createTask);

router.put("/update/:id/:taskId", isAuthenticated,projectController.updateTask);

module.exports = router

const app = express();
const port = 3000;

app.use(express.json()).use("/api/task", taskRoute);

const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.post('/create', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.put('/update/:id_task', taskController.updateTask);
router.delete('/delete/:id_task', taskController.deleteTask);

module.exports = router;

