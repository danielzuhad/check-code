const express = require("express");
const app = express();
const todoRoute = require("./routes/todo.route");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/todo", todoRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
