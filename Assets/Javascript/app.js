//..
let newAnimals = ["Lion", "Tiger", "Gorilla", "Polar Bear"];

//..
function addButton() {
  $("#btnView").empty();
  $("#contentView").empty();
  for (let i = 0; i < newAnimals.length; i++) {
    let a = $("<button>");
    a.addClass("animal");
    a.attr("data-animal", newAnimals[i]); // changed from data-name, bacause on line 31 you get get the attribute
    a.text(newAnimals[i]);
    $("#btnView").append(a);
  }
  onClick(); // added onClick, because you need to set the onClick handlers again after adding a new button
}

//..
$("#submit").on("click", function (event) {
  event.preventDefault();
  let newAnimal = $("#input").val().trim();
  newAnimals.push(newAnimal);
  addButton();
});
//..
addButton();
//..
function onClick() {
  $(".animal").on("click", function () { // changed from #btnView, because you want to do this when you click on the button, not the div
    $("#contentView").empty();
    let animal = $(this).attr("data-animal"); 
    console.log("Animal: ", this);
    let queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      animal +
      "&api_key=zUw0bnZlqKeg8r03F07nOOSOcXkjgXnN&limit=5";

    //..
    $.ajax({
      url: queryURL,
      method: "GET",
    })

      //..
      .then(function (response) {
        console.log(queryURL);
        console.log(response);
        let results = response.data;
        for (i = 0; i < results.length; i++) {
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
}
onClick();
//..
function clear() {
  $("#contentView").empty();
}
