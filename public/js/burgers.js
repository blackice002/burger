$(".create-from").on ("submit",function(event){
    event.preventDefault();
    var newBurger={
        name:$("#bName").val().trim(),
        devoured:$("[ name= devoured]:checked").val().trim()
    };

    $.ajax("/api/burger", {
        type:"POST",
        data:newBurger
    }).then(function(){
        console.log("created new Burger");
        location.reload();
    })
});
 $(".change- devoured").on ("click",function(event){
     var id = $(this).data("id");
     var newDevored = $(this).data("newDevored");
     var newDevoredState={
         devoured:newDevored
     };
     $.ajax("/api/burger" +id,{
         type:"PUT", 
         data: newDevoredState
        }).then(function(){
            location.reload()
        })
 });

 $(".delete-burger").on("click",function(event){
     var id = $(this).data(id);
     $.ajax("/api/burger/" + id,{
         type:"DELETE"
     }).then(function(){
         console.log("burger Deleted"+ id);
         location.reload();
     })
 })
