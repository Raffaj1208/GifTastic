//..
let newAnimals = ["lion", "dog", "gorilla", "bear"];

//..
function addButton(){
    $("#btnView").empty();
    for (let i = 0; i < newAnimals.length; i++){
        let a = $("<button>");
        a.addClass("animal");
        a.attr("data-name", newAnimals[i]);
        a.text(newAnimals[i]);
        $("#btnView").append(a);
    }
}

//..
$("#submit").on("click", function(event){
    event.preventDefault();
    let newAnimal = $("#input").val().trim();
    newAnimals.push(newAnimal);
    addButton();
});
//..
addButton();

//.. Create a function that runs when the button is clicked 
$("#btnView").on("click", function(){
    let gifDisplay = $(this).attr("btnView");
    let queryURL = "" + gifDisplay + "&api_key=zUw0bnZlqKeg8r03F07nOOSOcXkjgXnN";
});