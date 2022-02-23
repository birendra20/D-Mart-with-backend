require("dotenv").config();
const express = require("express");
const monoose = require("mongoose");
const app = express();
const path = require("path");

app.use(express.json())
const homeRoutes = require("./controllers/home");
const userController = require("./controllers/user.controller");
const adressController = require("./controllers/adress.controller")

app.set("view engine", "ejs"), app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));

monoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("", homeRoutes);
app.use("/signup", userController)
app.use("/adress", adressController)


let port = process.env.PORT || 2200;
app.listen(port, () => {
  console.log(`server started port ${port}`);
});
