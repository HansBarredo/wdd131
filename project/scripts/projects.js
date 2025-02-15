const buildings = [
  {
    buildingName: "Tower McAllister",
    location: "Pasig, Philippines",
    imageUrl:
      "assets/build1.jpg"
  },
  {
    buildingName: "Cottage",
    location: "Rizal, Philippines",
    imageUrl:
      "assets/build2.jpg"
  },
  {
    buildingName: "McKinley Villa",
    location: "Ilocos Sur, Philippines",
    imageUrl:
      "assets/build3.jpg"
  },
  {
    buildingName: "Balay Highlands",
    location: "Baguio, Philippines",
    imageUrl:
      "assets/build4.jpg"
  },
  {
    buildingName: "D.C. House",
    location: "Rizal, Philippines",
    imageUrl:
      "assets/build5.jpg"
  }
];


function renderCards(buildings) {
  const html = buildings.map(
    (building) => `<section class="card">
    <div></div>
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
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut nostrum recusandae est sapiente exercitationem similique, distinctio eveniet laudantium iusto! Officiis voluptatum dignissimos perspiciatis. Voluptas ea illo animi culpa sequi ratione illum dolorum sunt non iste asperiores minus quia explicabo, aspernatur amet. Illo autem velit ullam odit explicabo eveniet magnam providen.</p>
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
