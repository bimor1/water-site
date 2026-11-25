const menuToggle = document.querySelector('#menuToggle');
const nav = document.querySelector('#nav');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const note = document.querySelector('#formNote');
  note.textContent = 'Форма работает в демонстрационном режиме. Подключите обработчик заявок, чтобы отправлять данные владельцу сайта.';
  note.classList.add('notice');
});
