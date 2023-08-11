const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.getElementById('modalClose');

galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    modalImage.src = image.src;
    modal.style.display = 'flex';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});
