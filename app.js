const express = require("express");
const app = express();
const ejs = require("ejs");

const port = process.env.PORT;
if (port || port === "")
    port = 3000;

const homeStartingContent = "aqui vai um pouco sobre mim: sou psicóloga formada em 2018, amo escrever e sou apaixonada pelos thrillers do Stephen King. Adquirir conhecimentos e me aventurar em novas áreas é algo que sempre me atraiu, por isso atualmente estou estudando programação e buscando entrar nesse mercado!"

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home", {
        startingContent: homeStartingContent
    });
});

app.get("/curriculum", function(req, res) {
    res.render("curriculum");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});

app.listen(port, function(){
    console.log("Server started on port " + port)
});