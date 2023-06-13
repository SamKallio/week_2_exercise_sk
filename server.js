const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "static")));

app.use("/hello", require("./hello"));
app.use("/echo", require("./echo"));
app.use("/sum", require("./sum"));
app.use("/list", require("./list"));

app.listen(port, () => console.log(`Listening to a port ${port}!`));
