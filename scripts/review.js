let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);


const modified = document.querySelector("#modified");

let oLastModif = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;
