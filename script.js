const engBtn = document.getElementById('eng-btn');
const rusBtn = document.getElementById('rus-btn');
const enContainer = document.getElementsByClassName('en-container');
const rusContainer = document.getElementsByClassName('rus-container');


engBtn.addEventListener('click', () => {
  rusContainer[0].hidden = true;
  enContainer[0].hidden = false;
});


rusBtn.addEventListener('click', () => {
  rusContainer[0].hidden = false;
  enContainer[0].hidden = true;
});


