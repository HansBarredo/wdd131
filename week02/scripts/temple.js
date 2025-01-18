const mainnav = document.querySelector('.small');
const hambutton = document.querySelector('#menu');
const branding = document.querySelector('#navigation');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
  branding.classList.toggle('hide');
});

function checkScreenSize() {
  const screenWidthInPixels = window.innerWidth;
  const thresholdWidth = 40 * 16; 

  const nav = document.querySelector('#navigation'); // Get the element to check for hide class

  if (screenWidthInPixels >= thresholdWidth) {
    if (nav.classList.contains('hide')) {
      nav.classList.remove('hide');
    }
  } else {
    if (!nav.classList.contains('hide')) {
      nav.classList.add('hide');
    }
  }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize);

const modified = document.querySelector("#modified");

let oLastModif = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;
