//..
let animals = ["lion", "dog", "ape", "bear"];

//..
function addButton(){
    $("#btnView").empty();
    for (let i = 0; i < animals.length; i++){
        let a = $("<button>");
        a.addClass("animal");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#btnView").append(a);
    }
}

//..
$("#submit").on("click", function(event){
    event.preventDefault();
    let animal = $("#input").val().trim();
    animals.push(animal);
    addButton();
});
//..
addButton();