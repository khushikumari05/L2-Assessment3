const API_KEY = 'tXGcNk11VB6XmdUMUZAIC8aIywRZX5LwPmfFJzEYMqXRb9BbAb74e7YM';
const url = 'https://api.pexels.com/v1/search?query=nature&per_page=1';

fetch(url, {
    headers: {
        'Authorization': API_KEY
    }
})
.then(response => {
    console.log('Response status:', response.status);
    return response.json();
})
.then(data => {
    console.log('Data:', data);
    if (data.photos) {
        data.photos.forEach(photo => {
            console.log('Image URL:', photo.src.original);
        });
    }
})
.catch(error => console.error('Error:', error));