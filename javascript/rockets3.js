let url = "https://api.spacexdata.com/v4/rockets";
fetch(url)
    .then(res => res.json())
    .then(Data => {
        let info_rocket = document.getElementById("name");
        info_rocket.innerHTML += `
        <h1>${Data[2].name.toUpperCase()}</h1>
        `;
        let velocity_section = document.getElementById("data-velocity")
        velocity_section.innerHTML += `
        <p>${Data[2].height.meters} Mts</p>
        `;
        let velocity_section2 = document.getElementById("data-velocity2")
        velocity_section2.innerHTML += `
        <p>${Data[2].diameter.meters} Mts</p>
        `;
        let velocity_section3 = document.getElementById("data-velocity3")
        let kg = Data[2].mass.kg;
        let tons = kg / 1000;
        velocity_section3.innerHTML += `
        <p>${tons} Tn</p>
        `;
        let velocity_section4 = document.getElementById("data-velocity4")
        velocity_section4.innerHTML += `
        <p>${Data[2].first_stage.thrust_sea_level.kN} kN</p>
        `;
        let velocity_section5 = document.getElementById("data-velocity5")
        velocity_section5.innerHTML += `
        <p>${Data[2].first_stage.thrust_vacuum.kN} kN</p>
        `;
        let velocity_section6 = document.getElementById("data-velocity6")
        velocity_section6.innerHTML += `
        <p>${Data[2].second_stage.engines}</p>
        `;
        let description_section = document.getElementById("description_section")
        description_section.innerHTML += `
        <p>${Data[2].description}</p>
        `;
        let information = document.getElementById("Information")
        information.innerHTML += `
        <p>Type: <span>${Data[2].type}</span></p>
        <p>active: <span>${Data[2].active}</span></p>
        <p>Stages: <span>${Data[2].stages}</span></p>
        <p>Boosters: <span>${Data[2].boosters}</span></p>
        <p>Cost Per Launch: <span>$ ${Data[2].cost_per_launch}</span></p>
        <p>First Fling: <span>${Data[2].first_flight}</span></p>
        <p>Country: <span>${Data[2].country}</span></p>
        <p>Company: <span>${Data[2].company}</span></p>
        `;
    });



const spacexAPI = 'https://api.spacexdata.com/v4/rockets';
    let currentIndex = 0;
    let images = [];
    
    async function fetchImages() {
        const response = await fetch(spacexAPI);
        const rockets = await response.json();
    
        if (rockets.length > 0 && rockets[2].flickr_images.length > 0) {
            images = rockets[2].flickr_images;
            updateCarousel();
        }
    }
    
    function updateCarousel() {
        const imgElement = document.getElementById('carouselImage');
        imgElement.src = images[currentIndex];
    }
    
    const preloadImages = () => {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    };
    
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    }, 3000); 
    
    preloadImages();
    fetchImages();

