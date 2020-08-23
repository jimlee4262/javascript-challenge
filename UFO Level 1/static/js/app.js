// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

function refresh_data(ufo_data){
    ufo_data.forEach(function(ufo) {
        // adding tr rows
        var row = tbody.append("tr");
        // add 1 cell per ufo for datetime, city, state, country, shape, durationminutes, and comments
        Object.entries(ufo).forEach(function([key, value]) {
            // append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        })
    })
}

// filter date/time

var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(){
    // prevent page from refreshing
    d3.event.preventDefault();
    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufodata => ufodata.datetime === inputValue);
    
    refresh_data(filteredData);
}


