const express=require("express"),
logger=require("morgan"),
mongoose=require("mongoose"),

PORT=process.env.PORT||3e3,app=express();

app.use(logger("dev")),
app.use(express.urlencoded({extended:!0})),
app.use(express.json()),
app.use(express.static("public")),

mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost/workout",
{useNewUrlParser:!0});

const db=require("./models");
require("./routes/apiRoutes")(app),
require("./routes/htmlRoutes")(app),

app.listen(PORT,()=>
{console.log(`App running on port ${PORT}!`)});