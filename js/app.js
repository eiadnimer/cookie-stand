'use strict';

class HourlyTotal {
    constructor(hour, numberOfCookiesPerHour){
        this.hour = hour;
        this.numberOfCookiesPerHour = numberOfCookiesPerHour;
    }

    toString(){
        return this.hour + ": " + Math.floor(this.numberOfCookiesPerHour) + " cookies";
    }
}

class Shop {
    numofhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

    constructor(location, minNumberOfCustomer, maxNumberOfCustomer, averageCookiesPerSale) {
        this.location = location;
        this.minNumberOfCustomer = minNumberOfCustomer;
        this.maxNumberOfCustomer = maxNumberOfCustomer;
        this.averageCookiesPerSale = averageCookiesPerSale;
    }

    calculateNumberOfHourlyTotals() {
        // loop over number of hours
        // then 
        // get random number of customers
        // multiple with average
        // store data in the array ( hour, result )
        // return the array
        var result = [];
        for(var i = 0; i < this.numofhours.length; i++){
            var randomNumberOfCustomers = Math.floor(Math.random() * (this.maxNumberOfCustomer - this.minNumberOfCustomer + 1) + this.minNumberOfCustomer);
            var numberOfCookies = randomNumberOfCustomers * this.averageCookiesPerSale;
            result[i] = new HourlyTotal(this.numofhours[i], numberOfCookies);
        }
        return result;
    }

    asHTML(){
        var div = document.createElement('div');
        var shopTitleParagraph = document.createElement('p');
        shopTitleParagraph.textContent = this.location;
        div.appendChild(shopTitleParagraph);
        var unorderedList = document.createElement('ul');
        var result = this.calculateNumberOfHourlyTotals();
        for(var i = 0; i<result.length; i++){
            var li = document.createElement('li');
            li.textContent = result[i].toString();
            unorderedList.appendChild(li);
        }
        div.appendChild(unorderedList);
        return div;
    }
}

var dubai = new Shop("Dubai", 11, 38, 2.3);
var seattle = new Shop("Seattle", 23, 65, 6.3);
var tokyo = new Shop("Tokyo", 3, 24, 1.2);
var paris = new Shop("Paris", 20, 38, 2.3);
var lima = new Shop("Lima", 2, 16, 4.6);

document.body.appendChild(dubai.asHTML());
document.body.appendChild(seattle.asHTML());
document.body.appendChild(tokyo.asHTML());
document.body.appendChild(paris.asHTML());
document.body.appendChild(lima.asHTML());

// var Numofhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
// var seattle = {
//     mincusperhour: 23,
//     maxcusperhour: 65,
//     avgcookiespersales: 6.3,
//     custmerperhour: [],
//     cusseleperhour: [],
//     cusperhour: function () {

//         for (var i = 0; i < Numofhours.length; i++) {
//             this.custmerperhour[i] = Math.floor(Math.random() * (this.maxcusperhour - this.mincusperhour + 1) + this.mincusperhour);
//             console.log(this.custmerperhour[i]);
            
//         }

//     },
// }
// seattle.cusperhour();

// return Math.floor(Math.random() * Math.floor(max));

// var Tokyo = {
//     mincusperhour = 3,
//     maxcusperhour = 24,
//     avgcookiesperhour = 1.2,
//     calculationperhour = function(){

//     }
// }
// var Dubai = {
//     mincusperhour = 11,
//     maxcusperhour = 38,
//     avgcookiesperhour = 3.7,
//     calculationperhour = function(){

//     }
// }
// var Paris = {
//     mincusperhour = 20,
//     maxcusperhour = 38,
//     avgcookiesperhour = 2.3,
//     calculationperhour = function(){

//     }
// }
// var Lima = {
//     mincusperhour = 2,
//     maxcusperhour = 16,
//     avgcookiesperhour = 4.6,
//     calculationperhour = function(){

//     }
// }