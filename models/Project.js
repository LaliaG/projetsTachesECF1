const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Project = sequelize.define("Project", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    projectname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 255],
          msg: "Le nom du projet doit contenir maximum 255 caractères",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 255],
          msg: "La description doit contenir maximum 255 caractères",
        },
      },
      
    },
    etat: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        
        
      },
  });

  return Project;
};