let express = require("express"),
    app = express(),
    PORT = process.env.PORT || 3000;

app.set("view engine", "ejs")
app.use(express.static("public"))
//LANDING PAGE ROUTE
app.get("/", (req, res) => {
    res.redirect("/home")
})

//HOME PAGE ROUTE
app.get("/home", (req, res) => {
    res.render("home")
})

//TEST PAGE ROUTE
app.get("/test", (req, res) => {
    res.render("test")
})

app.listen(PORT, () =>{
    console.log("Server started")
})
