// nav to display the section
var doc = document;
var firstNavButton = doc.querySelectorAll('.page-wrapper header nav a')[0];
var secondNavButton = doc.querySelectorAll('.page-wrapper header nav a')[1];
var main = doc.querySelectorAll('main')[0];

// to do: set interval to scroll smoothly http://jsfiddle.net/DruwJ/1/
firstNavButton.addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo(0, 0)
}, true)

secondNavButton.addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo(0, document.body.scrollHeight);
}, true)
