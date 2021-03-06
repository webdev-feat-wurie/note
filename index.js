const express = require("express");
const jwt = require("express-jwt");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const router = require("./router");

const port = process.env.PORT || 21702;
const mongodbURL =
  `mongodb://${process.env.MONGODB_HOST}/notes` ||
  "mongodb://note_db:27017/notes";

mongoose.connect(mongodbURL, { useNewUrlParser: true });
mongoose.connection.on("error", error => console.error(error));
mongoose.connection.once("open", () => console.log("connected to database"));

app.use(express.json());
app.use(cors());
app.use(
  jwt({
    secret: "radenajengwurianditawahyumurticandrakiranadewi"
  }).unless({
    path: ["/"]
  })
);
app.get("/", (_, res) => res.send("OK"));
app.use("/", router);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
