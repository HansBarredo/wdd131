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

  const services = [
    {
      service: "Architectural and Engineering Design",
      textContent: "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.",
      imageUrl:"assets/service1.jpg"
    },
    {
      service: "Consultancy",
      textContent: "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.",
      imageUrl:"assets/service2.jpg"
    },
    {
      service: "Construction",
      textContent: "Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.",
      imageUrl:"assets/service3.jpg"
    },
  ];

  const teams = [
    {
      teamName: "Alexander James Carter",
      position: "Chief Architect | CEO",
      imageUrl:
        "assets/profile_4.jpg"
    },
    {
      teamName: "Ava Gabriella Fernandez",
      position: "Senior Engineer | COO",
      imageUrl:
        "assets/profile_5.jpg"
    },
    {
      teamName: "Ethan James Kim",
      position: "Head of Design",
      imageUrl:
        "assets/profile_2.jpg"
    },
    {
      teamName: "Sophia Jade Morales",
      position: "Architect",
      imageUrl:
        "assets/profile_3.jpg"
    },
    {
      teamName: "Sebastian Henry Martinez",
      position: "Civil Engineer",
      imageUrl:
        "assets/profile_1.jpg"
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
    document.querySelector(".feature").innerHTML = html.join("");
  }
  
  renderCards(buildings)

  function renderServices(services) {
    const html = services.map(
      (service) => `<article>
            <div class="article-wrapper">
              <figure>
                <img src="${service.imageUrl}" alt="" />
              </figure>
              <div class="article-body">
                <h2>${service.service}</h2>
                <p>
                  ${service.textContent}
                </p>
                <a href="#" class="read-more">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>`
    );
    document.querySelector(".articles").innerHTML = html.join("");
  }
  
  renderServices(services)


  function renderTeam(teams) {
    const html = teams.map(
      (team) => `<section class="card">
      <div></div>
      <h3>${team.teamName}</h3>
      <span>${team.position}</span>
      <img src="${team.imageUrl}" alt="Photo of the ${team.teamName} Temple" loading="lazy"></img>
      </section>`
    );
    document.querySelector(".team").innerHTML = html.join("");
  }
  
  renderTeam(teams)
 
  const track = document.querySelector('.feature');

  document.addEventListener("mousedown", (e) => {
    track.dataset.mouseDownAt = e.clientX;
    track.dataset.prevPercentage = track.dataset.percentage || "0";
  });
  
  document.addEventListener("mouseup", () => {
    delete track.dataset.mouseDownAt; 
    track.dataset.prevPercentage = track.dataset.percentage;
  });
  
  document.addEventListener("mousemove", (e) => {
    if (!track.dataset.mouseDownAt) return;
  
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2;
  
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPerUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPerUnconstrained, 0), -33.33);
  
    track.dataset.percentage = nextPercentage;
    track.style.transform = `translateX(${nextPercentage}%)`;
  
    const listImage = track.getElementsByClassName("image");
    for (const image of listImage) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  });
  
  const trackTeam = document.querySelector('.team');

  document.addEventListener("mousedown", (e) => {
    trackTeam.dataset.mouseDownAt = e.clientX;
    trackTeam.dataset.prevPercentage = trackTeam.dataset.percentage || "0";
  });
  
  document.addEventListener("mouseup", () => {
    delete trackTeam.dataset.mouseDownAt; 
    trackTeam.dataset.prevPercentage = trackTeam.dataset.percentage;
  });
  
  document.addEventListener("mousemove", (e) => {
    if (!trackTeam.dataset.mouseDownAt) return;
  
    const mouseDelta = parseFloat(trackTeam.dataset.mouseDownAt) - e.clientX;
    const maxDelta = window.innerWidth / 2; // Sensitivity
  
    // Calculate dynamic constraints
    const containerWidth = trackTeam.parentElement.clientWidth; 
    const contentWidth = trackTeam.scrollWidth; 
    const maxOffset = Math.max(contentWidth - containerWidth, 0); 
  
    // Convert maxOffset to percentage-based constraint
    const minPercentage = -((maxOffset / contentWidth) * 100); 
  
    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPerUnconstrained = parseFloat(trackTeam.dataset.prevPercentage) + percentage;
    const nextPercentage = Math.max(Math.min(nextPerUnconstrained, 0), minPercentage);
  
    trackTeam.dataset.percentage = nextPercentage;
    trackTeam.style.transform = `translateX(${nextPercentage}%)`;
  
    const listImage = trackTeam.getElementsByClassName("image");
    for (const image of listImage) {
      image.style.objectPosition = `${100 + nextPercentage}% center`;
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("header");
    let lastScrollY = window.scrollY;
  
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
  
      // Show the nav when scrolling down
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        nav.classList.add("active");
      } else if (currentScrollY)  {
        nav.classList.remove("active");
      }
  
      lastScrollY = currentScrollY;
    });
  });



  
  
  