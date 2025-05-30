document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('menu').querySelector('ul');
  menu.classList.toggle('show');
});