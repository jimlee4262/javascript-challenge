// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

function refresh_data(ufo_data){

    // Deletes prior data within the table. Puts the original list back in order
    var tb = document.querySelector('tbody');
    while (tb.childNodes.length) {
        tb.removeChild(tb.childNodes[0]);
    }

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

// function for the table to automatically populate when visiting the website
function populatedata(maindata){

    // Deletes prior data within the table. Puts the original list back in order
    var tb = document.querySelector('tbody');
    while (tb.childNodes.length) {
        tb.removeChild(tb.childNodes[0]);
    }
    // loop through the data.js file
    maindata.forEach(function(entry){
        // add 1 cell per entry for datetime, city, state, country, shape, duration minutes, and comments
        var row = tbody.append("tr");
        Object.entries(entry).forEach(function([key, value]) {
            // append a cell to tthe row for each value
            var cell = row.append("td");
            cell.text(value);
        })
    })
}
// automatically populate with the main data
populatedata (tableData);

// date/time
var button = d3.select("#filter-btn-date");
var inputField = d3.select("#datetime");
var form = d3.select("#form-date");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter(){
    // prevent page from refreshing
    d3.event.preventDefault();
    var inputElement = inputField;
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(ufodata => ufodata.datetime === inputValue);
    
    refresh_data(filteredData);
}


// reset filter
var resetbutton = d3.select("#filter-btn-reset");
resetbutton.on("click", resetdata);

function resetdata(){
    d3.event.preventDefault();
    populatedata(tableData);
}