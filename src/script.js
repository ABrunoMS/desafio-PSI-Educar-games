document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'colaborador@educargames.com' && password === '123456') {
        window.location.href = 'main.html';
    } else {
        document.getElementById('error-message').textContent = 'Email ou senha inválidos!';
    }
});

//captura todos os containers de carrosel
const carousels = document.querySelectorAll('.carousel-container');

window.addEventListener('resize', initializeCarousel);
initializeCarousel();

function initializeCarousel() {
    carousels.forEach(container => {
        const prevButton = container.querySelector('.prev');
        const nextButton = container.querySelector('.next');
        const carousel = container.querySelector('.carousel');
        
        // Captura a largura do primeiro card
        const cardWidth = carousel.querySelector('.card').getBoundingClientRect().width + 20; 
        let currentIndex = 0;
        
        const isSmallScreen = window.innerWidth < 990;

        if (isSmallScreen) {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
            carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            setupCarouselNavigation(container, carousel, cardWidth);
        } else {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
            carousel.style.transform = 'none';
        }
    });
}

function setupCarouselNavigation(container, carousel, cardWidth) {
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    let currentIndex = 0;
    
    // Calcula o número máximo de slides com base no tamanho do container e do card
    const maxIndex = Math.max(0, carousel.children.length - Math.floor(container.offsetWidth / cardWidth));

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex-=1;
            carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex+=1;
            carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        } else {
            currentIndex = 0; 
            carousel.style.transform = `translateX(0px)`; // Reseta a posição do carrossel
        }
    });
}
