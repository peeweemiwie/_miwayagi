// nav to display the section
var doc = document;
var firstNavButton = doc.querySelectorAll('.page-wrapper header nav a')[0];
var secondNavButton = doc.querySelectorAll('.page-wrapper header nav a')[1];
var firstFooterNavButton = doc.querySelectorAll('.page-wrapper footer nav a')[0];
var secondFooterNavButton = doc.querySelectorAll('.page-wrapper footer nav a')[1];

// to do: set interval to scroll smoothly http://jsfiddle.net/DruwJ/1/
firstNavButton.addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo(0, 0);
}, true)

firstFooterNavButton.addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo(0, 0);
}, true)

secondNavButton.addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo(0, document.body.scrollHeight);
}, true)

secondFooterNavButton.addEventListener('click', function(e){
  e.preventDefault();
  window.scrollTo(0, document.body.scrollHeight);
}, true)


// document.querySelector('body').addEventListener('click', function(e){
//
//   var firstNavButton = doc.querySelectorAll('.page-wrapper header nav a')[0];
//   var secondNavButton = doc.querySelectorAll('.page-wrapper header nav a')[1];
//   var firstFooterNavButton = doc.querySelectorAll('.page-wrapper footer nav a')[0];
//   var secondFooterNavButton = doc.querySelectorAll('.page-wrapper footer nav a')[1];
//
//   if(e.target == firstNavButton || firstFooterNavButton){
//     e.preventDefault();
//     window.scrollTo(0, 0);
//   }else if (e.target == firstFooterNavButton || secondFooterNavButton){
//     e.preventDefault();
//     window.scrollTo(0, document.body.scrollHeight);
//   }
//
// }, true)
