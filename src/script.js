//captura o form do login e adiciona função ao botão
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'colaborador@educargames.com' && password === '123456') {
        window.location.href = 'src/main.html';
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
        const cardWidth = carousel.querySelector('.card').getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(carousel).gap) || 0; 
        const cardOffset = cardWidth + gap; 
        let currentIndex = 0;
        
        const isSmallScreen = window.innerWidth < 990;

        if (isSmallScreen) {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
            carousel.style.transform = `translateX(-${currentIndex * cardOffset}px)`;
            setupCarouselNavigation(container, carousel, cardOffset);
        } else {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
            carousel.style.transform = 'none';
        }
    });
}

function setupCarouselNavigation(container, carousel, cardOffset) {
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    let currentIndex = 0;
    
    // Calcula o número máximo de slides com base no tamanho do container e do card
    const maxIndex = Math.max(0, carousel.children.length - Math.floor(container.offsetWidth / cardOffset));

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex-=1;
            carousel.style.transform = `translateX(-${currentIndex * cardOffset}px)`;
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex+=1;
            carousel.style.transform = `translateX(-${currentIndex * cardOffset}px)`;
        } else {
            currentIndex = 0; 
            carousel.style.transform = `translateX(0px)`; // Reseta a posição do carrossel
        }
    });
}

//funções do formulário de cadastro
//botão cadastro na vaga
document.getElementById('apply-button')?.addEventListener('click', function (e) {
    window.location.href = 'formRegisterVacancy.html';
});

//botão cadastro curso
document.getElementById('applyCurse-button')?.addEventListener('click', function (e) {
    window.location.href = 'formRegisterVacancy.html?omitResumeUpload=true';
});

//Oculta e remove a obrigatoriedade do campo de currículo no formulário de cursos
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const omitResumeUpload = params.get('omitResumeUpload');

    if (omitResumeUpload === 'true') {
        const resumeUploadSection = document.getElementById('resume-upload-section');
        const resumeInput = document.getElementById('resume');
        if (resumeUploadSection) {
            resumeUploadSection.style.display = 'none';
        }
        if (resumeInput) {
            resumeInput.required = false;
        }
    }
});

document.getElementById('job-application-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('tel', document.getElementById('tel').value);
    formData.append('team', document.getElementById('team').value);
    formData.append('role', document.getElementById('role').value);
    formData.append('resume', document.getElementById('resume').files[0]);

    alert('Aplicação enviada com sucesso!')
    this.reset()

    //caso existisse um banco de dados para enviar o formulário poderia utilizar esse código
    //seria preciso apenas alterar a função para assíncrona
   /* try {
        const response = await fetch('https://seu-backend-api.com/apply', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Aplicação enviada com sucesso!');
        } else {
            alert('Erro ao enviar a aplicação.');
        }
    } catch (error) {
        alert('Ocorreu um erro: ' + error.message);
    }*/
});
