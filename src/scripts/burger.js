const icon = document.getElementById('icon');
const overlay = document.getElementById('overlay');
const closeIcon = document.getElementById('close-icon');

icon.addEventListener('click', () => {
    console.log('clicked');
  overlay.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  overlay.style.display = 'none';
});