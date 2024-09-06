const video = document.getElementById('video');
const engBtn = document.getElementById('eng-btn');
const rusBtn = document.getElementById('rus-btn');
const textContainer = document.querySelector('.text-container');
const engText = document.querySelector('.eng-text');
const rusText = document.querySelector('.rus-text');

// Set language on button click
engBtn.addEventListener('click', () => {
    engText.style.display = 'block';
    rusText.style.display = 'none';
});

rusBtn.addEventListener('click', () => {
    engText.style.display = 'none';
    rusText.style.display = 'block';
});

// Play video on page load
video.play();
