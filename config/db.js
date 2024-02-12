const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    "project_database",
    "root",
    "Laliayou19",
    {
      host: "localhost",
      dialect: "mysql"
    }
  )

  //Synchronisation des modèles
  const Project = require("../models/Project")(sequelize);
  const Task = require("../models/Task")(sequelize);
  const User = require("../models/User")(sequelize);
  
  Project.hasMany(Task);
  Task.belongsTo(Project);
  sequelize
    .sync({ force: false })
    .then(() => console.log("La base de données à bien été synchronisée"))
    .catch((error) =>
      console.error("Problème lors de la synchronisation :", error.message)
    );
  
  module.exports = {
    sequelize,
    Project,
    Task,
    User,
  };