var path=require("path");

module.exports=function(e)

{e.get("/exercise",function(e,t)
{t.sendFile(path.join(__dirname,"../public/exercise.html"))}),

e.get("/stats",function(e,t)
{t.sendFile(path.join(__dirname,"../public/stats.html"))})};