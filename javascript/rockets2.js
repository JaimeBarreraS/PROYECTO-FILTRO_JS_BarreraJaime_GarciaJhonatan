const spacexAPI = 'https://api.spacexdata.com/v4/rockets';
    let currentIndex = 0;
    let images = [];
    
    async function fetchImages() {
        const response = await fetch(spacexAPI);
        const rockets = await response.json();
    
        if (rockets.length > 0 && rockets[1].flickr_images.length > 0) {
            images = rockets[1].flickr_images;
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