// declare your functions here...

<<<<<<< HEAD
/*function paragraphSelector() {
  var parSelect = $('p');
  var allPar = [];
  for (let i = 0; i<parSelect.length;i++) {
  var currPar = parSelect[i].innerHTML
  allPar.push(currPar);
  }
}   */

function paragraphSelector() {
  return $('p')
}

function lastImageSelector() {
   return $('img:last')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
 return $('.pics')
}

function firstListItem() {
 return $('#pic-list li:first-child')
=======
function paragraphSelector() {
  $('p')
}

function lastImageSeletor() {
  $('img:last')
}

function ninjaBabySelector() {
  $('#baby-ninja')
}

function divSelector() {
  $('div .pics')
}

function firstListItem() {
  $('ul .pic-list:first-child')
>>>>>>> b3bb4c40a36530845bdae28cdc1db25db340b0d2
}