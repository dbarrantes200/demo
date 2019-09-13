// from data.js
// Get references to the tbody element, input fields and buttons
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");
// Add an event listener to the searchButton and resetButton, call functions when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);
// Set tableData to data initially
var tableData = data;

// renderTable renders the filtered data to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // Get get the current ufodata object and its fields
    var ufodata = tableData[i];
    var fields = Object.keys(ufodata);
    // Create a new row in the tbody, set the index to be i and index every item inthe row
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the ufodata object, create a new cell at set its inner text to be the right field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufodata[field];
    }
  }
  $(document).ready( function () {
  	$(newFunction()).DataTable({
  		searching: false,
    	ordering:  false
  	});
  } );
}

function handleSearchButtonClick() {
  // go through search items with formatted user's search terms by removing leading and trailing whitespace

  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    tableData = data.filter(function (ufodata) {
      var sightingDate = ufodata.datetime;
      return sightingDate.includes(filterDate);
    });
  };
  var filterCity = $cityInput.value.trim().toLowerCase();
  if (filterCity != "") {
    tableData = tableData.filter(function (ufodata) {
      var sightingCity = ufodata.city;
      return sightingCity === filterCity;
    });
  };
  var filterState = $stateInput.value.trim().toLowerCase();
  if (filterState != "") {
    tableData = tableData.filter(function (ufodata) {
      var sightingState = ufodata.state;
      return sightingState === filterState;
    });
  };
  var filterCountry = $countryInput.value.trim().toLowerCase();
  if (filterCountry != "") {
    tableData = tableData.filter(function (ufodata) {
      var sightingCountry = ufodata.country;
      return sightingCountry === filterCountry;
    });
  };
  var filterShape = $shapeInput.value.trim().toLowerCase();
  if (filterShape != "") {
    tableData = tableData.filter(function (ufodata) {
      var sightingShape = ufodata.shape;
      return sightingShape === filterShape;
    });
  };
  renderTable();
};


// Reset the data and search form after a search
function handleResetButtonClick() {
  tableData = data;
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";
  renderTable();
}


