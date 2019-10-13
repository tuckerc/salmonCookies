'use strict';

//global for store open time
const openTime = 6;
//global for store close time
const closeTime = 20;
//global for store hours
const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var locations = [];

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

function fillHeader() {
  var tr = document.createElement('tr');
  var th = document.createElement('th');
  tr.appendChild(th);
  for (var hour = 0; hour < hours.length; hour++) {
    var hourTH = document.createElement('th');
    hourTH.textContent = hours[hour];
    tr.appendChild(hourTH);
  }
  var cityTotHeader = document.createElement('th');
  cityTotHeader.textContent = 'Daily Location Total';
  tr.appendChild(cityTotHeader);
  document.getElementById('tableHead').appendChild(tr);
}

function fillFooter() {
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
}

function addStore(name, minCust, maxCust, cookiesPerSale) {
  locations.push(new Store(name, minCust, maxCust, cookiesPerSale));
  if (document.getElementById('tableBody').children.length > 1) {
    //remove footer
    var lastTR = document.getElementById('tableBody').lastChild;
    document.getElementById('tableBody').removeChild(lastTR);
  }
  locations[locations.length - 1].fillTable();
  fillFooter();
}

fillHeader();

function fillFromForm(e) {
  e.preventDefault();
  // e.stopPropagation();
  var nameInput = document.getElementById('nameInput');
  var minCustInput = document.getElementById('minCustInput');
  var maxCustInput = document.getElementById('maxCustInput');
  var cookiesPerSaleInput = document.getElementById('cookiesPerSaleInput');
  if (nameInput.value === '' || nameInput.value === null || minCustInput.value === '' || minCustInput.value === null || maxCustInput.value === '' || maxCustInput.value === null || cookiesPerSaleInput.value === '' || cookiesPerSaleInput.value === null) {
    alert('Please provide a value for all fields');
  }
  else {
    if(!isNaN(nameInput.value)) {
      alert('Text only please');
    }
    else {
      addStore(nameInput.value, minCustInput.value, maxCustInput.value, cookiesPerSaleInput.value);
      nameInput.value = null;
      minCustInput.value = null;
      maxCustInput.value = null;
      cookiesPerSaleInput.value = null;
      nameInput.focus();
    }
  }
}

document.getElementById('addSubmit').addEventListener('click', fillFromForm);
