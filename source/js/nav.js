const burgerButton = document.querySelector('.burger-button');
const nav = document.querySelector('.header__nav');
const navLinks = nav.querySelectorAll('.nav__link');

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('active');
  nav.classList.toggle('active');
  toggleFixedBody();
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    nav.classList.toggle('active');
    toggleFixedBody();
  });
});

function toggleFixedBody() {
  if (burgerButton.classList.contains('active')) {
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.width = '100vw';
    body.style.top = `-${scrollY}`;
  } else {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  }
}
