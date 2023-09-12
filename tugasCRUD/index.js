const express= require("express");
const mongoose = require("mongoose");

const bodyParser =require("express");

const app = express();

const port = 8000;
const apirouter=require("./api-routes");
// const parse = require("nodemon/lib/cli/parse");


app.get("/",(req,res)=>{
    res.send(
        "hello,selamat anda telah berhasil membuat web server dengan nodemon"
    );
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

app.use("/api",apirouter);
mongoose.connect('mongodb://localhost/tugascrud')
const db =mongoose.connection;
app.listen(port,()=>{
    console.log(`server berjalan di port ${port}`)
});