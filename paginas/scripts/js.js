document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modal-image');
    const caption = document.getElementById('modal-caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    const images = Array.from(document.querySelectorAll('.gallery-item img'));

    function showImage(index) {
        modalImg.src = images[index].src;
        caption.textContent = images[index].alt;
        modal.style.display = 'flex';
        currentIndex = index;
    }

    document.querySelectorAll('.gallery-item img').forEach((img, index) => {
        img.addEventListener('click', () => {
            showImage(index);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
