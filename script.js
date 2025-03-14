document.addEventListener("DOMContentLoaded", function () {
    const API_KEY = 'tXGcNk11VB6XmdUMUZAIC8aIywRZX5LwPmfFJzEYMqXRb9BbAb74e7YM';
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const productImage = document.querySelector(".product-image img");
    const photographer = document.querySelector(".product-info .photographer");
    const title = document.querySelector(".product-info h2");
    const sliderContainer = document.querySelector('.swiper-wrapper');

    let swiperInstance = null; // Store Swiper instance

    // Default image setup
    fetchImages("nature");

    // Search Button Click Event
    searchBtn.addEventListener("click", function () {
        const query = searchInput.value.trim();
        if (query !== "") {
            fetchImages(query);
        }
    });

    // Fetch images from Pexels API
    function fetchImages(query) {
        const url = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;

        fetch(url, {
            headers: { 'Authorization': API_KEY }
        })
        .then(response => response.json())
        .then(data => {
            if (data.photos && data.photos.length > 0) {
                updateLaptopSection(data.photos[0]); // Show only the first image initially
                updateSlider(data.photos.slice(1));  // Populate the slider with remaining images
            } else {
                console.log("No images found.");
                sliderContainer.innerHTML = "<p>No images found</p>";
            }
        })
        .catch(error => console.error('Error:', error));
    }

    // Update the laptop section with an image
    function updateLaptopSection(photo) {
        productImage.src = photo.src.large;
        productImage.alt = photo.photographer;
        photographer.textContent = `Photographer: ${photo.photographer}`;
        title.textContent = "Stock Photo";
    }

    // Update the slider with remaining images
    function updateSlider(photos) {
        sliderContainer.innerHTML = ""; // Clear previous images

        photos.forEach(photo => {
            const slide = document.createElement("div");
            slide.classList.add("swiper-slide");
            slide.innerHTML = `
                <img src="${photo.src.large}" alt="${photo.photographer}" class="slider-img">
                <div class="slide-info">
                    <h3>${photo.alt || "Image Alt"}</h3>
                    <p>${photo.photographer}</p>
                </div>
            `;

            // Click event to update the laptop section when an image in the slider is clicked
            slide.addEventListener("click", function () {
                updateLaptopSection(photo);
            });

            sliderContainer.appendChild(slide);
        });

        initializeSwiper(); // Reinitialize Swiper after updating slides
    }

    // Initialize Swiper for the slider
    function initializeSwiper() {
        if (swiperInstance) {
            swiperInstance.destroy(true, true); // Destroy previous Swiper instance
        }

        swiperInstance = new Swiper('.swiper', {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
            },
        });
    }
});