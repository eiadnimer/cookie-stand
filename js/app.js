"use strict";

var numofhours = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
];

function HourlyTotal(hour, numberOfCookiesPerHour) {
    this.hour = hour;
    this.numberOfCookiesPerHour = numberOfCookiesPerHour;
}
HourlyTotal.prototype.toString = function() {
    return (
        this.hour + ": " + Math.floor(this.numberOfCookiesPerHour) + " cookies"
    );
};

function Shop(
    location,
    minNumberOfCustomer,
    maxNumberOfCustomer,
    averageCookiesPerSale
) {
    this.location = location;
    this.minNumberOfCustomer = minNumberOfCustomer;
    this.maxNumberOfCustomer = maxNumberOfCustomer;
    this.averageCookiesPerSale = averageCookiesPerSale;
}
Shop.prototype.calculateNumberOfHourlyTotals = function() {
    var result = [];
    for (var i = 0; i < numofhours.length; i++) {
        var randomNumberOfCustomers = Math.floor(
            Math.random() *
            (this.maxNumberOfCustomer - this.minNumberOfCustomer + 1) +
            this.minNumberOfCustomer
        );
        var numberOfCookies = Math.ceil(
            randomNumberOfCustomers * this.averageCookiesPerSale
        );
        result[i] = new HourlyTotal(numofhours[i], numberOfCookies);
    }
    return result;
};
Shop.prototype.asHTML = function() {
    var shop1Row = document.createElement("tr");
    var locationtd = document.createElement("td");
    locationtd.textContent = this.location;
    shop1Row.appendChild(locationtd);
    var totals = this.calculateNumberOfHourlyTotals();
    var sum = 0;
    for (var o = 0; o < totals.length; o++) {
        var randomdata = document.createElement("td");
        shop1Row.appendChild(randomdata);
        randomdata.textContent = totals[o].numberOfCookiesPerHour;
        sum += totals[o].numberOfCookiesPerHour;
    }

    var randomdata = document.createElement("td");
    shop1Row.appendChild(randomdata);
    randomdata.textContent = sum;
    return shop1Row;
};

var dubai = new Shop("Dubai", 11, 38, 2.3);
var seattle = new Shop("Seattle", 23, 65, 6.3);
var tokyo = new Shop("Tokyo", 3, 24, 1.2);
var paris = new Shop("Paris", 20, 38, 2.3);
var lima = new Shop("Lima", 2, 16, 4.6);

var shops = [seattle, dubai, tokyo, paris, lima];

var form = document.getElementById("store-date");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    var location = document.getElementById("branch-name").value;
    var mincustomerPerHour = parseInt(event.target.mincustomerPerHour.value, 10);
    var maxcustomerPerHour = parseInt(event.target.maxcustomerPerHour.value, 10);
    var averageCookiesPerSale = parseInt(event.target.avragecookiepercustomer.value, 10);

    var shop = new Shop(
        location,
        mincustomerPerHour,
        maxcustomerPerHour,
        averageCookiesPerSale
    );
    shops.push(shop);
    tableContainer.innerHTML = "";
    renderTable();
});

var tableContainer = document.createElement("div");
document.body.appendChild(tableContainer);


function renderTable() {
    var tabel = document.createElement("table");
    var headerRow = document.createElement("tr");
    var headerOne = document.createElement("th");
    headerOne.textContent = "";
    headerRow.appendChild(headerOne);

    for (var i = 0; i < numofhours.length; i++) {
        var header = document.createElement("th");
        header.textContent = numofhours[i];
        headerRow.appendChild(header);
    }

    var totalHeader = document.createElement("th");
    headerRow.appendChild(totalHeader);
    totalHeader.textContent = "Daily Location Total";

    tabel.appendChild(headerRow);
    for (var j = 0; j < shops.length; j++) {
        var shop = shops[j];
        tabel.appendChild(shop.asHTML());
    }
    tableContainer.appendChild(tabel);
}

renderTable(shops);