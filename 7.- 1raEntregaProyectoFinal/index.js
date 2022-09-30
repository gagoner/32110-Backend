const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./routes/api/index");

app.use(express.json());

app.listen(PORT, (error) => {
    if (error) {
        console.log(`Server error ${error}`)
    } else {
        console.log(`Server running on port ${PORT}`)
    }
})

app.use("/api", routes);

app.get("/", (req, res) => {
  res.redirect("/api/productos");
});
