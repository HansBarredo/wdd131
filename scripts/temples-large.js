function checkScreenSize() {
  const screenWidthInPixels = window.innerWidth;
  const thresholdWidth = 40 * 16;

  const nav = document.querySelector('#navigation'); 

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
