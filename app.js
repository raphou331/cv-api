const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const languesRoute = require("./routes/languesRoute");
const contactRoute = require("./routes/contactRoute");
const competenceRoute = require("./routes/competenceRoute");
const loisirsRoute = require("./routes/loisirsRoute");
const formationRoute = require("./routes/formationRoute");
const experienceRoute = require("./routes/experienceRoute");
console.log(process.env.PORT);

const app = express();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("connexion a la base de données avec succées");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => console.log("le serveur tourne sur le port 3333"));

app.use(cors());
app.use(express.json());
app.use("", contactRoute);
app.use("", competenceRoute);
app.use("", languesRoute);
app.use("", loisirsRoute);
app.use("", formationRoute);
app.use("", experienceRoute);
