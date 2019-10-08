'use strict';

//global for store open time
const openTime = 6;
//global for store close time
const closeTime = 20;

// store constructor
function Store(name, minCust, maxCust, cookiesPerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.cookiesPerSale = cookiesPerSale;
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.setMinCust = function() {
    this.minCust = Math.random() * (this.maxCust - 0) + this.minCust;
  };
  this.setMaxCrust = function() {
    this.maxCust = Math.random() * (1000 - this.minCust) + this.minCust;
  };
  // function to generate a random number of cookies
  this.cookieQuant = function() {
    return Math.round((Math.random() * (this.maxCust - this.minCust) + this.minCust) * this.cookiesPerSale);
  };
  this.fillTable = function() {
    var tr = document.createElement('tr');
    var name = document.createElement('th');
    name.textContent = this.name;
    tr.appendChild(name);

    var total = 0;
    // generate and fill new hourly cookie counts
    for (var x = 0; x < closeTime - openTime; x++) {
      var td = document.createElement('td');
      var cookieCount = this.cookieQuant();
      total += cookieCount;
      this.cookiesPerHour.push(cookieCount);
      td.textContent = cookieCount;
      tr.appendChild(td);
    }
    var td = document.createElement('td');
    td.textContent = total;
    tr.appendChild(td);
    document.getElementById('tableBody').appendChild(tr);
  };
}

// Seattle
var seattle = new Store('Seattle', 23, 54, 6.3);

// Tokyo
var tokyo = new Store('Tokyo', 3, 24, 1.2);

// Dubai
var dubai = new Store('Dubai', 11, 38, 3.7);

// Paris
var paris = new Store('Paris', 20, 38, 2.3);

// Lima
var lima = new Store('Lima', 2, 16, 4.6);

// set initial values for store locations
var locations = [seattle,tokyo,dubai,paris,lima];

console.log(locations);

seattle.fillTable();
tokyo.fillTable();
dubai.fillTable();
paris.fillTable();
lima.fillTable();

var tr = document.createElement('tr');
var td = document.createElement('td');
tr.appendChild(td);
// fill in totals by hour
var grandTotal = 0;
for (var y = 0; y < closeTime - openTime; y++) {
  var total = 0;
  var totalTD = document.createElement('td');
  for (var z = 0; z < locations.length; z++) {
    total += Number(locations[z].cookiesPerHour[y]);
  }
  grandTotal += total;
  totalTD.textContent = total;
  tr.appendChild(totalTD);
}
var grandTotalTD = document.createElement('td');
grandTotalTD.textContent = grandTotal;
tr.appendChild(grandTotalTD);
document.getElementById('tableBody').appendChild(tr);
// function to update min and max customers for all locations
// function resetStores(locs) {
//   for(var i = 0; i < locs.length; i++) {
//     locs[i].setMinCust();
//     locs[i].setMaxCrust();
//   }
// }

/******************************************
* Script for Salmon Cookies day 1.
******************************************/

// var grandTotal = 0; //var for daily grand total
// // loop through locations
// for (var j = 0; j < locations.length; j++) {
//   var store = document.createElement('tr');
//   var th = document.createElement('th');
//   th.textContent = locations[j].name;
//   store.appendChild(th);

//   // loop through store to generate list by hour
//   for(var k = openTime; k < closeTime; k++) {
//     var randCookies = cookieQuant(locations[j]);
//     locations[j].cookiesPerHour.push(randCookies);
//     locations[j].totalCookies += randCookies;
//     var td = document.createElement('td');
//     td.textContent = randCookies;
//     store.appendChild(td);
//   }
//   // add total cookies
//   var td = document.createElement('td');
//   td.textContent = locations[j].totalCookies;
//   store.appendChild(td);

//   var tableBody = document.getElementById('tableBody');
//   tableBody.appendChild(store);
//   grandTotal += locations[j].totalCookies;
// }

// var hourlyTotal = 0; //var to hold hourly total for all stores
// var store = document.createElement('tr');
// var td = document.createElement('td');
// store.appendChild(td);
// for(var n = 0; n < locations[0].cookiesPerHour.length; n++) {
//   for(var p = 0; p < locations.length; p++) {
//     hourlyTotal += Number(locations[p].cookiesPerHour[n]);
//   }
//   var total = document.createElement('td');
//   total.textContent = hourlyTotal;
//   store.appendChild(total);
// }
// var total = document.createElement('td');
// total.textContent = grandTotal;
// store.appendChild(total);
// var tableBody = document.getElementById('tableBody');
// tableBody.appendChild(store);

// document.getElementById('update').onclick = function() {
//   // clear old report data
//   var lists = document.getElementsByTagName('ul');
//   for (var l = 0; l < lists.length; l++) {
//     var elements = lists[l].children;
//     for (var m = 0; m < elements.length; m++) {
//       lists[l].removeChild(elements[m]);
//     }
//     document.body.removeChild(lists[l]);
//   }

//   resetStores(locations);
//   // loop through locations
//   for (var j = 0; j < locations.length; j++) {
//     var store = document.createElement('ul');
//     document.body.appendChild(store);
//     document.body.lastChild.textContent = locations[j].name;
//     // loop through store to generate list by hour
//     for(var k = openTime; k < closeTime; k++) {
//       var randCookies = cookieQuant(locations[j]);
//       var newLI = document.createElement('li');
//       document.body.appendChild(newLI);
//       // am or pm?
//       if (k < 12) {
//         document.body.lastChild.textContent = k + 'am: ' + randCookies + ' cookies';
//       }
//       else if (k === 12) {
//         document.body.lastChild.textContent = k + 'pm: ' + randCookies + ' cookies';
//       }
//       else {
//         document.body.lastChild.textContent = k - 12 + 'pm: ' + randCookies + ' cookies';
//       }
//     }
//   }
// };
