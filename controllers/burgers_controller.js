var express = require("express");
var route = express.Route();
var burger= ("./modules/burger.js");

route.get("/burgers",function(req,res){
    burger.selectAll(function(results){
        res.render("index", {burgers:results})
    });
});

route.post('/burgers/create',function(req,res){
    burger.addBurger([""],[req.body.burger_name, req.body.devoured], function(){
        res.redirect('/burgers');
    });
});
route.put("/burgers/update/:id",function(req,res){
    var condition = "id = "+ req.params.id;
burger.update({devoured:req.body.sleepy}, condition,function(){
    res.redirect("/burgers");
});
});
module.exports= route;

