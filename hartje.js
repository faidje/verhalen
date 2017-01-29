/* 1. selecteer elementen met document.querySelector */
var section = document.querySelector('.dancer'); // first section element
var button = document.querySelector('section > button');

var dance = function () {
  /* 3. toggle een class op een element, dit triggert een CSS Transition (zie CSS: section.dance) */
	section.classList.toggle('dancing')
}

/* 2. voeg een event toe aan een element */
button.addEventListener('click', dance);













/* var logo = document.querySelector('header h1');
var infoBox = document.querySelector('.infoBox');

var showInfo = function () {
  infoBox.classList.toggle('show');
}

logo.addEventListener('click', showInfo); */

