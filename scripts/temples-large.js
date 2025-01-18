function checkScreenSize() {
    const screenWidthInPixels = window.innerWidth;
    const thresholdWidth = 40 * 16; 
    const nav = document.querySelector('#navigation'); // Get the element to check for hide class
  
    if (screenWidthInPixels >= thresholdWidth) {
      nav.classList.remove('hide');
    } else {
      nav.classList.add('hide');
    }
  }
  
  window.addEventListener('resize', checkScreenSize);
  window.addEventListener('load', checkScreenSize);
  
  const modified = document.querySelector("#modified");
  
  let oLastModif = new Date(document.lastModified);
  
  modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;
  