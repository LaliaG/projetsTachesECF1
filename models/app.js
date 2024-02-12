const express = require("express");
const isAuthenticated = require("./middlewares/authentication");
const DB = require("./config/db");
const userRoute = require("./routes/userRoute");
const projectRoute = require("./routes/projectRoute");
const taskRoute = require('./router/taskRoutes');
const app = express();
const port = 3000;




app.use(express.json())
    .use("/api/user", userRoute)
    .use("/api/project", projectRoute)


DB.sequelize
  .authenticate()
  .then(() => console.log("Connexion avec la base de données réussie"))
  .then(() => {
    app.listen(port, () => {
      console.log("http://localhost:", port);
    });
  })
  .catch((err) => {
    console.log(
      "Erreur lors de la connexion à la base de données",
      err.message
    );
  });

  ;;;
 

app.use(express.json())
app.use('/api', userRoute);
app.use('/project', projectRoute);
app.use('/task', taskRoute);


DB.sequelize
  .authenticate()
  .then(() => console.log("Connexion avec la base de données réussie"))
  .then(() => {
    app.listen(port, () => {
      console.log("http://localhost:", port);
    });
  })
  .catch((err) => {
    console.log(
      "Erreur lors de la connexion à la base de données",
      err.message
    );
  });