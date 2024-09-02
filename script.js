// Efecto de Desplazamiento Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar el botón de regreso al inicio cuando se hace scroll hacia abajo
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.id = 'scrollToTopBtn';
document.body.appendChild(scrollBtn);

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Función para regresar al inicio lentamente
scrollBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Seleccionar el ícono del menú y la lista de navegación
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

// Agregar evento de clic al ícono del menú
menuIcon.addEventListener('click', function() {
    navList.classList.toggle('show');
    menuIcon.classList.toggle('active');
});

//JavaScript para Mostrar la Hora
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();

    // Obteniendo la hora, minutos y segundos
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Formateando minutos y segundos para que siempre sean dos dígitos
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Mostrando la hora en el formato de 24 horas
    timeElement.textContent = `Mérida, Yucatán: ${hours}:${minutes}:${seconds}`;
    
    // Aplicando el efecto de desvanecimiento
    timeElement.classList.add('fade');
    setTimeout(() => {
        timeElement.classList.remove('fade');
    }, 500); // Desvanecimiento en 0.5 segundos
}

// Actualizar la hora cada segundo
setInterval(updateTime, 1000);

// Llamar a la función inmediatamente para mostrar la hora al cargar la página
updateTime();






const prevButton = document.querySelector('.slider-prev');
const nextButton = document.querySelector('.slider-next');
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-item');
let index = 0;

function showSlide(n) {
    if (n >= slides.length) {
        index = 0;
    } else if (n < 0) {
        index = slides.length - 1;
    } else {
        index = n;
    }
    sliderTrack.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener('click', () => {
    showSlide(index - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(index + 1);
});








document.addEventListener('DOMContentLoaded', () => {
    const progressFills = document.querySelectorAll('.progress-fill');
    
    progressFills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = width;
        }, 100);
    });
});





