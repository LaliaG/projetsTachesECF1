const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Task = sequelize.define("Task", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 255],
          msg: "Le titre de la tâche doit contenir maximum 255 caractères",
        },
      },
    },
    description_tache: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 255],
          msg: "La description de la tâche doit contenir maximum 255 caractères",
        },
      },
      
    },
    priorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        
        
      },
      echeances: {
        type: DataTypes.DATE,
        allowNull: false,
        
        
      },
      statut: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        
        
      },
  });

  return Task;
};