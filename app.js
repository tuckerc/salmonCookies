'use strict';

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

// function to generate a random number of
// cookies
function cookieQuant(store) {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
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

// store 1 DOM
var store1 = document.createElement('ul');
document.getElementsByTagName('main').appendChild(store1);
//

// store 2 DOM
var store2 = document.createElement('ul');
document.getElementsByTagName('main').appendChild(store2);

// store 3 DOM
var store3 = document.createElement('ul');
document.getElementsByTagName('main').appendChild(store3);

// store 4 DOM
var store4 = document.createElement('ul');
document.getElementsByTagName('main').appendChild(store4);

// store 5 DOM
var store5 = document.createElement('ul');
document.getElementsByTagName('main').appendChild(store5);