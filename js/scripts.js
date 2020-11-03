// Business logic

function Movie(title, leadAct, ageRestriction, basePrice, showTime) {
  this.title = title;
  this.leadAct = leadAct;
  this.ageRestriction = ageRestriction;
  this.basePrice = basePrice;
  this.showTime = showTime;
}

let hippoParents = new Movie("Hippos Ate My Parents", "Chip McHip", 18, 17.50, ["the witching hour", "dusk 'til dawn marathon"]);

let honeyHippod = new Movie("Honey I Hippo'd the Kids", "Tamus Ojec", 5, 11, ["high noon", "the witching hour"]); 

let shakespearesOthippo = new Movie("Shakespeare's Othippo", "Chip McHip", 13, 22, ["high noon", "dusk 'til dawn marathon"]);


Movie.prototype.bribery = function() {
  return this.basePrice + (this.ageRestriction / 2) + 2.25
}

// function CONSTRUCTOR-NAME(key1, key2, key3) {
// 	this.key1 = key1;
// 	this.key2 = key2;
// 	this.key3 = key3;
// }


// UI logic
function addEventListeners() {
  $("#movie-select").on("click", "option", function() {
    console.log(this.id);
  });
};

addEventListeners();


$(document).ready(function() {
  $("#form").submit(e => {
    e.preventDefault();


  })
});