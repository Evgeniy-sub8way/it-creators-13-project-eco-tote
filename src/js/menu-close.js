// menu-close.js
const menu = document.querySelector('.wrap-mobile-menu'); // ищем по классу
const links = menu.querySelectorAll('a');

// Закрытие меню при клике на ссылку
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
});
