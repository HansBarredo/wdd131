const mainnav = document.querySelector('.small');
const hambutton = document.querySelector('#menu');
const branding = document.querySelector('#navigation');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
  branding.classList.toggle('hide');
});

const modified = document.querySelector("#modified");

let oLastModif = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Manila Philippines",
    location: "Quezon City, Manila, Philippines",
    dedicated: "1984, February, 14",
    area: 15800,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manila-philippines/800x500/manila-philippines-temple-lds-129585-wallpaper.jpg"
  },
  {
    templeName: "Bangkok Thailand",
    location: "Bangkok, Thailand",
    dedicated: "2019, August, 17",
    area: 6120,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/4052d9f8ff0e11edb9dbeeeeac1e97aea1b93079/full/640%2C/0/default"
  }
  // Add more temple objects here...
];




function renderCards(temples) {
  const html = temples.map(
    (temple) => `<section class="card">
    <h3>${temple.templeName} Temple</h3>
    <dl>
      <dt>Location:</dt>
      <dd>${temple.location}</dd>
      <dt>Dedicated:</dt>
      <dd>${temple.dedicated}</dd>
      <dt>Size:</dt>
      <dd>${temple.area}</dd>
    </dl>
    <img src="${temple.imageUrl}" alt="Photo of the ${temple.templeName} Temple" loading="lazy"></img>
    </section>`
  );
  document.querySelector(".image-gallery").innerHTML = html.join("");
}

renderCards(temples)


const homeLink = document.querySelector("a[href='#']");
homeLink.addEventListener("click", (event) => {
  event.preventDefault();
  renderCards(temples);   
});

const oldTemplesLink = document.getElementById("old-temples");
const newTemplesLink = document.getElementById("new-temples");

function filterTemples(isOld) {
  let filteredTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    if (isOld) {
      return year < 1900;  
    } else {
      return year >= 1900;  
    }
  });
  renderCards(filteredTemples);
}

oldTemplesLink.addEventListener("click", () => {
  filterTemples(true);  
});

newTemplesLink.addEventListener("click", () => {
  filterTemples(false); 
});


const bigTemplesLink = document.getElementById("large-temples");
const smallTemplesLink = document.getElementById("small-temples");

function filterTemplesSize(isLarge) {
  let filteredTemples = temples.filter(temple => {
    const size = parseInt(temple.area);
    if (isLarge) {
      return size > 90000;  
    } else {
      return size < 10000;  
    }
  });
  renderCards(filteredTemples);
}

bigTemplesLink.addEventListener("click", () => {
  filterTemplesSize(true);  
});

smallTemplesLink.addEventListener("click", () => {
  filterTemplesSize(false); 
});
