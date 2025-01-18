const mainnav = document.querySelector('.small');
const hambutton = document.querySelector('#menu');
const branding = document.querySelector('#navigation');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
  branding.classList.toggle('hide');
});

