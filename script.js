// document.addEventListener("DOMContentLoaded", function () {
//     const API_KEY = 'tXGcNk11VB6XmdUMUZAIC8aIywRZX5LwPmfFJzEYMqXRb9BbAb74e7YM';
//     const searchInput = document.getElementById("search-input");
//     const searchBtn = document.getElementById("search-btn");
//     const productImage = document.querySelector(".product-image img");
//     const photographer = document.querySelector(".product-info .photographer");
//     const title = document.querySelector(".product-info h2");
//     const sliderContainer = document.querySelector('.swiper-wrapper');

//     let swiperInstance = null; // Store Swiper instance

//     // Default image setup
//     fetchImages("nature");

//     // Search Button Click Event
//     searchBtn.addEventListener("click", function () {
//         const query = searchInput.value.trim();
//         if (query !== "") {
//             fetchImages(query);
//         }
//     });

//     // Fetch images from Pexels API
//     function fetchImages(query) {
//         const url = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;

//         fetch(url, {
//             headers: { 'Authorization': API_KEY }
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.photos && data.photos.length > 0) {
//                 updateLaptopSection(data.photos[0]); // Show only the first image initially
//                 updateSlider(data.photos.slice(1));  // Populate the slider with remaining images
//             } else {
//                 console.log("No images found.");
//                 sliderContainer.innerHTML = "<p>No images found</p>";
//             }
//         })
//         .catch(error => console.error('Error:', error));
//     }

//     // Update the laptop section with an image
//     function updateLaptopSection(photo) {
//         productImage.src = photo.src.large;
//         productImage.alt = photo.photographer;
//         photographer.textContent = `Photographer: ${photo.photographer}`;
//         title.textContent = "Stock Photo";
//     }

//     // Update the slider with remaining images
//     function updateSlider(photos) {
//         sliderContainer.innerHTML = ""; // Clear previous images

//         photos.forEach(photo => {
//             const slide = document.createElement("div");
//             slide.classList.add("swiper-slide");
//             slide.innerHTML = `
//                 <img src="${photo.src.large}" alt="${photo.photographer}" class="slider-img">
//                 <div class="slide-info">
//                     <h3>${photo.alt || "Image Alt"}</h3>
//                     <p>${photo.photographer}</p>
//                 </div>
//             `;

//             // Click event to update the laptop section when an image in the slider is clicked
//             slide.addEventListener("click", function () {
//                 updateLaptopSection(photo);
//             });

//             sliderContainer.appendChild(slide);
//         });

//         initializeSwiper(); // Reinitialize Swiper after updating slides
//     }

//     // Initialize Swiper for the slider
//     function initializeSwiper() {
//         if (swiperInstance) {
//             swiperInstance.destroy(true, true); // Destroy previous Swiper instance
//         }

//         swiperInstance = new Swiper('.swiper', {
//             slidesPerView: 4,
//             spaceBetween: 10,
//             loop: true,
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },
//             breakpoints: {
//                 320: { slidesPerView: 1, spaceBetween: 10 },
//                 768: { slidesPerView: 2, spaceBetween: 20 },
//                 1024: { slidesPerView: 4, spaceBetween: 30 },
//             },
//         });
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const API_KEY = 'tXGcNk11VB6XmdUMUZAIC8aIywRZX5LwPmfFJzEYMqXRb9BbAb74e7YM';
//     const searchInput = document.getElementById("search-input");
//     const searchBtn = document.getElementById("search-btn");
//     const productImage = document.querySelector(".product-image img");
//     const photographer = document.querySelector(".product-info .photographer");
//     const title = document.querySelector(".product-info h2");
//     const sliderContainer = document.querySelector('.swiper-wrapper');
//     const favoritesContainer = document.querySelector('.favorites-wrapper');
//     const favoritesList = [];

//     let swiperInstance = null; // Store Swiper instance

//     // Default image setup
//     fetchImages("nature");

//     // Search Button Click Event
//     searchBtn.addEventListener("click", function () {
//         const query = searchInput.value.trim();
//         if (query !== "") {
//             fetchImages(query);
//         }
//     });

//     // Fetch images from Pexels API
//     function fetchImages(query) {
//         const url = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;

//         fetch(url, {
//             headers: { 'Authorization': API_KEY }
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.photos && data.photos.length > 0) {
//                 updateLaptopSection(data.photos[0]); // Show only the first image initially
//                 updateSlider(data.photos.slice(1));  // Populate the slider with remaining images
//             } else {
//                 console.log("No images found.");
//                 sliderContainer.innerHTML = "<p>No images found</p>";
//             }
//         })
//         .catch(error => console.error('Error:', error));
//     }

//     // Update the laptop section with an image
//     function updateLaptopSection(photo) {
//         productImage.src = photo.src.large;
//         productImage.alt = photo.photographer;
//         photographer.textContent = `Photographer: ${photo.photographer}`;
//         title.textContent = "Stock Photo";
//     }

//     // Update the slider with remaining images
//     function updateSlider(photos) {
//         sliderContainer.innerHTML = ""; // Clear previous images

//         photos.forEach(photo => {
//             const slide = document.createElement("div");
//             slide.classList.add("swiper-slide");
//             slide.innerHTML = `
//                 <img src="${photo.src.large}" alt="${photo.photographer}" class="slider-img">
//                 <div class="slide-info">
//                     <h3>${photo.alt || "Image Alt"}</h3>
//                     <p>${photo.photographer}</p>
//                     <span class="fav-icon" data-id="${photo.id}">❤️</span>
//                 </div>
//             `;

//             // Click event to update the laptop section when an image in the slider is clicked
//             slide.addEventListener("click", function () {
//                 updateLaptopSection(photo);
//             });

//             // Click event to add/remove image to/from favorites
//             const favIcon = slide.querySelector(".fav-icon");
//             favIcon.addEventListener("click", function (event) {
//                 event.stopPropagation(); // Prevent the slide click event from firing
//                 toggleFavorite(photo);
//             });

//             sliderContainer.appendChild(slide);
//         });

//         initializeSwiper(); // Reinitialize Swiper after updating slides
//     }

//     // Toggle image in favorites
//     function toggleFavorite(photo) {
//         const index = favoritesList.findIndex(fav => fav.id === photo.id);
//         if (index === -1) {
//             favoritesList.push(photo);
//         } else {
//             favoritesList.splice(index, 1);
//         }
//         updateFavoritesSlider();
//     }

//     // Update the favorites slider
//     function updateFavoritesSlider() {
//         favoritesContainer.innerHTML = ""; // Clear previous favorites

//         favoritesList.forEach(photo => {
//             const slide = document.createElement("div");
//             slide.classList.add("swiper-slide");
//             slide.innerHTML = `
//                 <img src="${photo.src.large}" alt="${photo.photographer}" class="slider-img">
//                 <div class="slide-info">
//                     <h3>${photo.alt || "Image Alt"}</h3>
//                     <p>${photo.photographer}</p>
//                     <span class="fav-icon" data-id="${photo.id}">❤️</span>
//                 </div>
//             `;

//             // Click event to remove image from favorites
//             const favIcon = slide.querySelector(".fav-icon");
//             favIcon.addEventListener("click", function (event) {
//                 event.stopPropagation(); // Prevent the slide click event from firing
//                 toggleFavorite(photo);
//             });

//             favoritesContainer.appendChild(slide);
//         });

//         initializeFavoritesSwiper(); // Reinitialize Swiper for favorites
//     }

//     // Initialize Swiper for the slider
//     function initializeSwiper() {
//         if (swiperInstance) {
//             swiperInstance.destroy(true, true); // Destroy previous Swiper instance
//         }

//         swiperInstance = new Swiper('.swiper', {
//             slidesPerView: 4,
//             spaceBetween: 10,
//             loop: true,
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//             },
//             breakpoints: {
//                 320: { slidesPerView: 1, spaceBetween: 10 },
//                 768: { slidesPerView: 2, spaceBetween: 20 },
//                 1024: { slidesPerView: 4, spaceBetween: 30 },
//             },
//         });
//     }

//     // Initialize Swiper for the favorites slider
//     function initializeFavoritesSwiper() {
//         new Swiper('.favorites-swiper', {
//             slidesPerView: 4,
//             spaceBetween: 10,
//             loop: true,
//             navigation: {
//                 nextEl: '.favorites-button-next',
//                 prevEl: '.favorites-button-prev',
//             },
//             pagination: {
//                 el: '.favorites-pagination',
//                 clickable: true,
//             },
//             breakpoints: {
//                 320: { slidesPerView: 1, spaceBetween: 10 },
//                 768: { slidesPerView: 2, spaceBetween: 20 },
//                 1024: { slidesPerView: 4, spaceBetween: 30 },
//             },
//         });
//     }
// });


document.addEventListener("DOMContentLoaded", function () {
    const API_KEY = 'tXGcNk11VB6XmdUMUZAIC8aIywRZX5LwPmfFJzEYMqXRb9BbAb74e7YM';
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const productImage = document.querySelector(".product-image img");
    const photographer = document.querySelector(".product-info .photographer");
    const title = document.querySelector(".product-info h2");
    const sliderContainer = document.querySelector('.swiper-wrapper');
    const favoritesContainer = document.querySelector('.favorites-wrapper');
    const favoritesList = [];

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
                    <span class="fav-icon" data-id="${photo.id}">❤️</span>
                </div>
            `;

            // Click event to update the laptop section when an image in the slider is clicked
            slide.addEventListener("click", function () {
                updateLaptopSection(photo);
            });

            // Click event to add image to favorites
            const favIcon = slide.querySelector(".fav-icon");
            favIcon.addEventListener("click", function (event) {
                event.stopPropagation(); // Prevent the slide click event from firing
                addToFavorites(photo);
            });

            sliderContainer.appendChild(slide);
        });

        initializeSwiper(); // Reinitialize Swiper after updating slides
    }

    // Add image to favorites
    function addToFavorites(photo) {
        if (!favoritesList.some(fav => fav.id === photo.id)) {
            favoritesList.push(photo);
            updateFavoritesSlider();
        }
    }

    // Remove image from favorites
    function removeFromFavorites(photo) {
        const index = favoritesList.findIndex(fav => fav.id === photo.id);
        if (index !== -1) {
            favoritesList.splice(index, 1);
            updateFavoritesSlider();
        }
    }

    // Update the favorites slider
    function updateFavoritesSlider() {
        favoritesContainer.innerHTML = ""; // Clear previous favorites

        favoritesList.forEach(photo => {
            const slide = document.createElement("div");
            slide.classList.add("swiper-slide");
            slide.innerHTML = `
                <img src="${photo.src.large}" alt="${photo.photographer}" class="slider-img">
                <div class="slide-info">
                    <h3>${photo.alt || "Image Alt"}</h3>
                    <p>${photo.photographer}</p>
                    <span class="fav-icon" data-id="${photo.id}">❤️</span>
                </div>
            `;

            // Click event to remove image from favorites
            const favIcon = slide.querySelector(".fav-icon");
            favIcon.addEventListener("click", function (event) {
                event.stopPropagation(); // Prevent the slide click event from firing
                removeFromFavorites(photo);
            });

            favoritesContainer.appendChild(slide);
        });

        initializeFavoritesSwiper(); // Reinitialize Swiper for favorites
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

    // Initialize Swiper for the favorites slider
    function initializeFavoritesSwiper() {
        new Swiper('.favorites-swiper', {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: '.favorites-button-next',
                prevEl: '.favorites-button-prev',
            },
            pagination: {
                el: '.favorites-pagination',
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