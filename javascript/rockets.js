let url = "https://api.spacexdata.com/v4/rockets";
fetch(url)
    .then(res => res.json())
    .then(Data => {
        let info_rocket = document.getElementById("name");
        info_rocket.innerHTML += `
        <h1>${Data[0].name.toUpperCase()}</h1>
        `;
        let velocity_section = document.getElementById("data-velocity")
        velocity_section.innerHTML += `
        <p>${Data[0].height.meters} Mts</p>
        `;
        let velocity_section2 = document.getElementById("data-velocity2")
        velocity_section2.innerHTML += `
        <p>${Data[0].diameter.meters} Mts</p>
        `;
        let velocity_section3 = document.getElementById("data-velocity3")
        let kg = Data[0].mass.kg;
        let tons = kg / 1000;
        velocity_section3.innerHTML += `
        <p>${tons} Tn</p>
        `;
        let velocity_section4 = document.getElementById("data-velocity4")
        velocity_section4.innerHTML += `
        <p>${Data[0].first_stage.thrust_sea_level.kN} kN</p>
        `;
        let velocity_section5 = document.getElementById("data-velocity5")
        velocity_section5.innerHTML += `
        <p>${Data[0].first_stage.thrust_vacuum.kN} kN</p>
        `;
        let velocity_section6 = document.getElementById("data-velocity6")
        velocity_section6.innerHTML += `
        <p>${Data[0].second_stage.engines}</p>
        `;
        let description_section = document.getElementById("description_section")
        description_section.innerHTML += `
        <p>${Data[0].description}</p>
        `;
        let information = document.getElementById("Information")
        information.innerHTML += `
        <p>Type: <span>${Data[0].type}</span></p>
        <p>active: <span>${Data[0].active}</span></p>
        <p>Stages: <span>${Data[0].stages}</span></p>
        <p>Boosters: <span>${Data[0].boosters}</span></p>
        <p>Cost Per Launch: <span>$ ${Data[0].cost_per_launch}</span></p>
        <p>First Fling: <span>${Data[0].first_flight}</span></p>
        <p>Country: <span>${Data[0].country}</span></p>
        <p>Company: <span>${Data[0].company}</span></p>
        `;
    });


let currentIndex = 0;
const images = [
    '../storage/img/icons/img-rocket/imagen1.webp',
    '../storage/img/icons/img-rocket/imagen2.webp',
    '../storage/img/icons/img-rocket/imagen3.jpg'
];

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
updateCarousel();
