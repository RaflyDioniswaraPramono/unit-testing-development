const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhos:5173" }));

app.use(router);

if (process.env.NODE_ENV != "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`)
  })
}

module.exports = app;