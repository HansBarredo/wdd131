function checkScreenSize() {
  const screenWidthInPixels = window.innerWidth;
  const thresholdWidth = 40 * 16; 

  const nav = document.querySelector('.big');
  const smallMenu = document.querySelector('.small');
  const brand = document.querySelector('#branding');
  const hambutton = document.querySelector('#menu');

  if (screenWidthInPixels >= thresholdWidth) {
    if (nav.classList.contains('hide')) {
      nav.classList.remove('hide');
    }
    if (smallMenu.classList.contains('show')) {
      smallMenu.classList.remove('show');
    }
    if (brand.classList.contains('hide')) {
      brand.classList.remove('hide');
    }
    hambutton.classList.remove("show");
  } else {
    if (!nav.classList.contains('hide')) {
      nav.classList.add('hide');
    }
  }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);
