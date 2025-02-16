const buildings = [
  {
    buildingName: "Tower McAllister",
    location: "Pasig, Philippines",
    description: "A modern high-rise that embodies sophistication and functionality, Tower McAllister offers a seamless blend of contemporary architecture and cutting-edge engineering. Designed for both residential and commercial use, it prioritizes structural integrity, energy efficiency, and urban elegance.",
    imageUrl: "assets/build1.jpg"
  },
  {
    buildingName: "Cottage",
    location: "Rizal, Philippines",
    description: "A charming retreat that harmonizes with nature, this cottage is designed for comfort and tranquility. Featuring warm, rustic aesthetics and efficient spatial planning, it provides a cozy yet functional living space, perfect for relaxation and escape from the city.",
    imageUrl: "assets/build2.jpg"
  },
  {
    buildingName: "McKinley Villa",
    location: "Ilocos Sur, Philippines",
    description: "A luxurious residence that combines timeless design with modern conveniences. McKinley Villa boasts spacious interiors, premium materials, and carefully curated details, creating an elegant and inviting home suited for refined living.",
    imageUrl: "assets/build3.jpg"
  },
  {
    buildingName: "Balay Highlands",
    location: "Baguio, Philippines",
    description: "Nestled in a scenic landscape, Balay Highlands is a masterpiece of architectural design that maximizes natural light, ventilation, and breathtaking views. This home seamlessly integrates indoor and outdoor spaces, offering a serene and refreshing living experience.",
    imageUrl: "assets/build4.jpg"
  },
  {
    buildingName: "D.C. House",
    location: "Rizal, Philippines",
    description: "A contemporary home with a sleek and minimalist design, D.C. House is crafted for modern living. Thoughtful space planning, sustainable features, and high-quality finishes ensure a perfect balance of style, functionality, and comfort.",
    imageUrl: "assets/build5.jpg"
  }
];


function renderCards(buildings) {
  const html = buildings.map(
    (building) => `<section class="card">
    <div class='project-fill'></div>
    <h3>${building.buildingName}</h3>
    <img src="${building.imageUrl}" alt="Photo of the ${building.buildingName}" loading="lazy" class="image" draggable="false">
    </section>`
  );
  document.querySelector(".projects").innerHTML = html.join("");
}

renderCards(buildings)


function renderProjectsTexts(buildings) {
    const html = buildings.map(
      (building) => `<section class="card-text">
      <h3>${building.buildingName}</h3>
      <p>${building.description}</p>
      </section>`
    );
    document.querySelector(".projects-texts").innerHTML = html.join("");
  }

renderProjectsTexts(buildings)

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".projects-header");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        nav.classList.add("active");
      } else if (currentScrollY)  {
        nav.classList.remove("active");
      }
  
      lastScrollY = currentScrollY;
    });
  });
