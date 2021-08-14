const express = require('express');
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3005;

app.use(express.static('public'));

// GET Route for homepage
app.use("/", require("./routes/webRoutes"));

//api routes
app.use("/", require("./routes/apiRoutes"));

//server start
app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`));
