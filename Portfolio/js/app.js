const toggleButton = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});