const { Task } = require("../config/db");
const jwt = require('jsonwebtoken');


exports.createTask = async (req, res) => {
  try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "secret_key");
      const userId = decodedToken.userId;
      console.log(userId);
      const Projet = await Project.findOne({ where: { Userid: userId, id: req.params.id } });
      if (Projet) {
          const { name, description, etat } = req.body;
          const idProjet = req.params.id
          await task.create({ projectname, description,projectId:idProjet });
          res.status(201).json(task);
      }
  } catch (error) {
      res.status(500).json({ message: "Erreur lors de l'ajout de la tâche" });
  }
};
exports.updateTask = async (req, res) => {
  try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "secret_key");
      const userId = decodedToken.userId;
      console.log(userId);
      const Projet = await Project.findOne({ where: { Userid: userId, id: req.params.id } });
      if (Projet) {
          console.log("toto");
          const { name, description } = req.body;
          const idProjet = req.params.id
          await task.update({ projectname, description, etat}, {where: {id:req.params.idT}});
          res.status(201).json(task);
      }
  } catch (error) {
      res.status(500).json({ message: "Erreur lors de l'ajout de la tâche" });
  }
};

exports.getTask = async (req, res) => {
  try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "secret_key");
      const userId = decodedToken.userId;
      console.log(userId);
      const projet = await Project.findAll({ where: { Userid: userId } });
          const tasks = await task.findAll({where : {projectId : req.params.id}})

      res.json(tasks);
  } catch (tasks) {
      res
          .status(500)
          .json({ message: `Erreur lors de la récupération des Task` });
  }
};
exports.DeleteTask = async (req, res) => {
  try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, "secret_key");
      const Userid = decodedToken.userId;
      const projet =await Project.findOne({ where: { id: req.params.id, Userid: Userid } })
      await task.destroy({where : {projectId: req.params.id,id:req.params.idT}})
      if (!projet) {
          return res.status(404).json({ message: "tâche non trouvée." });
      }
      res.json(projet);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}