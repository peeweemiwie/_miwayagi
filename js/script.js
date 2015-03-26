var d = document;
var firstNavButton = d.querySelectorAll('.page-wrapper header nav a')[0];
var secondNavButton = d.querySelectorAll('.page-wrapper header nav a')[1];
var firstFooterNavButton = d.querySelectorAll('.page-wrapper footer nav a')[0];
var secondFooterNavButton = d.querySelectorAll('.page-wrapper footer nav a')[1];
var scrollTopButtons = [firstNavButton, firstFooterNavButton];
var scrollBottomButtons = [secondNavButton, secondFooterNavButton];
var i=0;
var j=0;
for (i; i<scrollTopButtons.length; i++){
  scrollTopButtons[i].addEventListener('click', function(e){
    console.log("top");
    e.preventDefault();
    window.scrollTo(0, 0);
  }, true)
}
for (j; j<scrollBottomButtons.length; j++){
  scrollBottomButtons[j].addEventListener('click', function(e){
    console.log('bottom');
    e.preventDefault();
    window.scrollTo(0, d.body.scrollHeight);
  }, true)
}
