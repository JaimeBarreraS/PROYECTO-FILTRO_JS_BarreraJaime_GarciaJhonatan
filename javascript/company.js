// Carousel 1
let currentIndex = 0;
const images = [
    '../storage/img/icons/img-company/1.jpg',
    '../storage/img/icons/img-company/2.jpg',
    '../storage/img/icons/img-company/3.jpg',
    '../storage/img/icons/img-company/4.jpg',
    '../storage/img/icons/img-company/5.jpg',
    '../storage/img/icons/img-company/6.jpg'
];

function updateCarousel() {
    const imgElement = document.getElementById('carouselImage');
    imgElement.src = images[currentIndex];
}

function preloadImages() {
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}, 3000);

preloadImages();
updateCarousel();

// Carousel 2
let currentIndex1 = 0;
const images1 = [
    '../storage/img/icons/img-company/a (1).jpg',
    '../storage/img/icons/img-company/a (2).jpg',
    '../storage/img/icons/img-company/a (3).jpg',
    '../storage/img/icons/img-company/a (4).jpg',
    '../storage/img/icons/img-company/a (5).jpg',
    '../storage/img/icons/img-company/a (6).jpg'
   
];

function updateCarousel1() {
    const imgElement1 = document.getElementById('carouselImage1');
    imgElement1.src = images1[currentIndex1];
}

function preloadImages1() {
    images1.forEach(src => {
        const img1 = new Image();
        img1.src = src;
    });
}

setInterval(() => {
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    updateCarousel1();
}, 3000);

preloadImages1();
updateCarousel1();

// Carousel 3
let currentIndex2 = 0;
const images2 = [
    '../storage/img/icons/img-company/b (1).jpg',
    '../storage/img/icons/img-company/b (2).jpg',
    '../storage/img/icons/img-company/b (3).jpg',
    '../storage/img/icons/img-company/b (4).jpg',
    '../storage/img/icons/img-company/b (5).jpg',
    '../storage/img/icons/img-company/b (6).jpg'
  
];

function updateCarousel2() {
    const imgElement2 = document.getElementById('carouselImage2');
    imgElement2.src = images2[currentIndex2];
}

function preloadImages2() {
    images2.forEach(src => {
        const img2 = new Image();
        img2.src = src;
    });
}

setInterval(() => {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    updateCarousel2();
}, 3000);

preloadImages2();
updateCarousel2();

/////////////////////////////////////


let url = "https://api.spacexdata.com/v4/company";
fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        let company = document.getElementById("here");
        company.innerHTML += `
        <p>${data.name}</p>
        `;

        let city = document.getElementById("city");
        city.innerHTML += `
        <p>${data.headquarters.city}</p>
        `;

        let state = document.getElementById("state");
        state.innerHTML += `
        <p>${data.headquarters.state}</p>
        `;

        let founder = document.getElementById("founder");
        founder.innerHTML += `
        <p>${data.founder}</p>
        `;

        let founded = document.getElementById("founded");
        founded.innerHTML += `
        <p>${data.founded}</p>
        `;

        let employees = document.getElementById("employees");
        employees.innerHTML += `
        <p>${data.employees}</p>
        `;

        let vehicles = document.getElementById("vehicles");
        vehicles.innerHTML += `
        <p>${data.vehicles}</p>
        `;

        let launch_sites = document.getElementById("launch_sites");
        launch_sites.innerHTML += `
        <p>${data.launch_sites}</p>
        `;


        let sumary = document.getElementById("sumary");
        sumary.innerHTML += `
        <p>${data.summary}</p>
        `;

        let ceo = document.getElementById("ceo");
        ceo.innerHTML += `
        <p>${data.ceo}</p>
        `;

        let coo = document.getElementById("coo");
        coo.innerHTML += `
        <p>${data.coo}</p>
        `;

        let cto_propulsion = document.getElementById("cto_propulsion");
        cto_propulsion.innerHTML += `
        <p>${data.cto_propulsion}</p>
        `;
    })

