'use strict';

//global for store open time
const openTime = 6;
//global for store close time
const closeTime = 20;

// Seattle
var seattle = {
  name: 'Seattle',
  minCust:23,
  maxCust:65,
  cookiesPerSale:6.3,
  setMinCust:function() {
    this.minCust = Math.random() * (this.maxCust - 0) + this.minCust;
  },
  setMaxCrust:function() {
    this.maxCust = Math.random() * (1000 - this.minCust) + this.minCust;
  }
};

// Tokyo
var tokyo = {
  name: 'Tokyo',
  minCust:3,
  maxCust:24,
  cookiesPerSale:1.2,
  setMinCust:function() {
    this.minCust = Math.random() * (this.maxCust - 0) + this.minCust;
  },
  setMaxCrust:function() {
    this.maxCust = Math.random() * (1000 - this.minCust) + this.minCust;
  }
};

// Dubai
var dubai = {
  name: 'Dubai',
  minCust:11,
  maxCust:38,
  cookiesPerSale:3.7,
  setMinCust:function() {
    this.minCust = Math.random() * (this.maxCust - 0) + this.minCust;
  },
  setMaxCrust:function() {
    this.maxCust = Math.random() * (1000 - this.minCust) + this.minCust;
  }
};

// Paris
var paris = {
  name: 'Paris',
  minCust:20,
  maxCust:38,
  cookiesPerSale:2.3,
  setMinCust:function() {
    this.minCust = Math.random() * (this.maxCust - 0) + this.minCust;
  },
  setMaxCrust:function() {
    this.maxCust = Math.random() * (1000 - this.minCust) + this.minCust;
  }
};

// Lima
var lima = {
  name: 'Lima',
  minCust:2,
  maxCust:16,
  cookiesPerSale:4.6,
  setMinCust:function() {
    this.minCust = Math.random() * (this.maxCust - 0) + this.minCust;
  },
  setMaxCrust:function() {
    this.maxCust = Math.random() * (1000 - this.minCust) + this.minCust;
  }
};

// set initial values for store locations
var locations = [seattle,tokyo,dubai,paris,lima];

console.log(locations);

// function to generate a random number of
// cookies
function cookieQuant(store) {
  return Math.round(Math.random() * (store.maxCust - store.minCust) + store.minCust);
}

// function to update min and max customers for all locations
function resetStores(locs) {
  for(var i = 0; i < locs.length; i++) {
    locs[i].setMinCust();
    locs[i].setMaxCrust();
  }
}

/******************************************
* Script for Salmon Cookies day 1.
******************************************/

// loop through locations
for (var j = 0; j < locations.length; j++) {
  var store = document.createElement('ul');
  document.body.appendChild(store);
  document.body.lastChild.textContent = locations[j].name;
  // loop through store to generate list by hour
  for(var k = openTime; k < closeTime; k++) {
    var randCookies = cookieQuant(locations[j]);
    var newLI = document.createElement('li');
    document.body.appendChild(newLI);
    // am or pm?
    if (k < 12) {
      document.body.lastChild.textContent = k + 'am: ' + randCookies + ' cookies';
    }
    else if (k === 12) {
      document.body.lastChild.textContent = k + 'pm: ' + randCookies + ' cookies';
    }
    else {
      document.body.lastChild.textContent = k - 12 + 'pm: ' + randCookies + ' cookies';
    }
  }
}

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
