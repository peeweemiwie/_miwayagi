(function(){
var d = document;
var scrollTopButtons = [
  d.querySelectorAll('.page-wrapper header nav a')[0],
  d.querySelectorAll('.page-wrapper footer nav a')[0]
];
var scrollBottomButtons = [
  d.querySelectorAll('.page-wrapper header nav a')[1],
  d.querySelectorAll('.page-wrapper footer nav a')[1]
];
var i=0, j=0;

for (i; i<scrollTopButtons.length; i++){
  scrollTopButtons[i].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0, 0);
  }, true)
}
for (j; j<scrollBottomButtons.length; j++){
  scrollBottomButtons[j].addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo(0, d.body.scrollHeight);
  }, true)
}

// Make header narrower when page is scrolled
window.addEventListener('scroll', function(){
var pageY = window.pageYOffset;
var d = document;
  if(pageY > 100){
    d.querySelector('header').classList.add('narrow');
  } else if (pageY < 100) {
    d.querySelector('header').classList.remove('narrow');
  }
})
})();
