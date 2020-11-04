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
let movies = [hippoParents, honeyHippod, shakespearesOthippo];
// console.log(movies[2].leadAct);
Movie.prototype.bribery = function() { return this.basePrice + (this.ageRestriction / 2) + 2.25 }



// UI logic
function renderTimeSelectDropdown(movieTitle) {
  // console.log(movieTitle)
  for (let i = 0; i <= movies.length; i++) {
    if (movies[i].title === movieTitle) {
    // console.log(movies[i].showTime);
    let showTimeOne = (movies[i].showTime)[0];
    let showTimeTwo = (movies[i].showTime)[1];
    $("#time-select").html(
      `<option value="" disabled selected value>-- select a time --</option>
      <option value="">${showTimeOne}</option>
      <option value="">${showTimeTwo}</option>`
      );
    };
  };
};

function addEventListeners() {
  $(document).on('change', '#movie-select', function(e) {
    let selectedMovie = this.options[e.target.selectedIndex].text;
    renderTimeSelectDropdown(selectedMovie);
  });
};

addEventListeners();




$(document).ready(function() {
  $("#form").submit(e => {
    e.preventDefault();
  })
});