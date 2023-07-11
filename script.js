// Add your custom JavaScript code here
document.addEventListener('DOMContentLoaded', function() {
  const tiles = document.querySelectorAll('.tile');

  // Array of random background images
  const backgroundImages = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
    // Add more image URLs as needed
  ];

  // Set random background images for each tile
  tiles.forEach(function(tile) {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    const randomImage = backgroundImages[randomIndex];
    tile.style.backgroundImage = `url(${randomImage})`;
  });
});
