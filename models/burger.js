var orm =require("./config/orm.js");
var burger={
    selectAll:function(burgerCreate){
        orm.selectAll("burgers",function(results){
            burgerCreate(results);
        });
    },
    addBurger: function(burgerAdd){
        orm.addBurger('burger_name',function(results){
            burgerAdd(results);
        });
    },
    updateBurger: function(burgerUpdate){
        orm.updateBurger("id",function(results){
            burgerUpdate(results)
        });
    }
};
module.exports = burger;