const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    header.style.transform = 'translateY(-100%)'; // прячем
  } else {
    header.style.transform = 'translateY(0)'; // показываем
  }

  lastScroll = currentScroll;
});
