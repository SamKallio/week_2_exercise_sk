const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "static")));

app.use("/hello", require("./hello/hello.js"));
app.use("/echo", require("./echo/dog.js"));
app.use("/sum", require("./sum/sum.js"));
app.use("/list", require("./list/list.js"));

app.listen(port, () => console.log(`Listening to a port ${port}!`));
