import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
const PORT = 3000;

const mongoURI = "mongodb://127.0.0.1/mydatabase"; // Replace with your MongoDB connection string

//setup mongoose
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Not connected to mongo");
  });
console.log("trying to connect to mongo");

//bodyParser setup for app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.send("node express is serving");
});
routes(app);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  const dd = new Date();
  console.log("-------last Line of index-----------");
});
