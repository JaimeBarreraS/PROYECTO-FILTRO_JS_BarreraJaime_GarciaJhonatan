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

// //////////////////////////////////////////////

let currentIndex1 = 0;
const images1 = [
    '../storage/img/icons/img-company/a.jpg',
    '../storage/img/icons/img-company/2.jpg',
    '../storage/img/icons/img-company/3.jpg',
    '../storage/img/icons/img-company/4.jpg',
    '../storage/img/icons/img-company/5.jpg',
    '../storage/img/icons/img-company/6.jpg'
    

];

function updateCarousel1() {
    const imgElement1 = document.getElementById('carouselImage1');
    imgElement1.src = images1[currentIndex1];
}
const preloadImages1 = () => {
    images1.forEach(src => {
        const img1 = new Image();
        img1.src = src;
    });
};

setInterval1(() => {
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    updateCarousel1();
}, 3000); 

preloadImages1();
updateCarousel1();  


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
        textlaunch_sites.innerHTML += `
        <p>${data.launch_sites}</p>
        `;


        let sumary = document.getElementById("sumary");
        sumary.innerHTML += `
        <p>${data.summary}</p>
        `;
    })

