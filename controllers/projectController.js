const { Project } = require("../config/db");
const jwt = require('jsonwebtoken');


exports.getAllProject = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const userId = decodedToken.userId;
        console.log(userId);
        const Projet = await Project.findAll({ where: { Userid: userId } });
        res.json(Projet);
    } catch (Projet) {
        res
            .status(500)
            .json({ message: `Erreur lors de la récupération des projets` });
    }
};

exports.createProject = async (req, res) => {
    try {
        const { projectname, description, etat } = req.body;
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const Userid = decodedToken.userId;
        await Project.create({ projectname, description, etat, Userid });
        res.status(201).json(Project);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout du projet" });
    }
};
exports.UpdateProject = async (req, res) => {
    try {

        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const Userid = decodedToken.userId;
        await Project.update({ projectname, description, etat } = req.body, { where: { Userid: Userid, id: req.params.id } })
        const projet = await Project.findOne({ where: { Userid: Userid, id: req.params.id } });
        if (!projet) {
            return res.status(404).json({ message: "Projet non trouvé." });
        }
        res.json(projet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.DeleteProject = async (req, res) => {
    try {
        const projet = await Project.findOne({ where: { id: req.params.id } });
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, "secret_key");
        const Userid = decodedToken.userId;
        await task.destroy({where : {projectId: req.params.id}})
        await Project.destroy({ where: { id: req.params.id, Userid: Userid } })
        if (!projet) {
            return res.status(404).json({ message: "projet non trouvé." });
        }
        res.json(projet);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




