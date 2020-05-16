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
//..
$("#btnView").on("click", function(){
    $("#contentView").empty();
let animal = $(this).attr("data-animal");
let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=zUw0bnZlqKeg8r03F07nOOSOcXkjgXnN&limit=5";

//..
$.ajax({
    url: queryURL,
    method: "GET"
})

//..
.then(function(response){
    console.log(queryURL);
    console.log(response);
    let results = response.data;
    for (i = 0; i < results.length; i++){
        let animalDiv = $("<div>");
        let p = $("<p>").text("Rating:" + results[i].rating);
        let animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);
        animalDiv.append(p);
        animalDiv.append(animalImage);
        $("#contentView").prepend(animalDiv);
    }
});

});
//..
function clear(){
$("#contentView").remove();
}
//.
