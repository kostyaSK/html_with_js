// Поведение кнопки формы в шапке профиля
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', saveAndClearInput);
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        saveAndClearInput();
    }
});

function saveAndClearInput() {
    if (searchInput.value) {
        searchInput.value = '';
    }
}

// Перемещение картинок на главной странице

const leftImage = document.getElementById('leftImage');
const rightImage = document.getElementById('rightImage');
const arrowRight = document.getElementById('arrowMainActive');
const arrowLeft = document.getElementById('arrowMainNoActive');
const mainCards = document.getElementById('mainCards');
const svgRight = arrowRight.querySelector('svg');
const svgLeft = arrowLeft.querySelector('svg');
let firstMove = true;

function activeRightArrow() {
    leftImage.classList.add('move-left');

    if (firstMove) {
        rightImage.classList.add('move-right');
    } else {
        rightImage.classList.add('move-right-second');
    }

    mainCards.classList.remove('move-right-bg');

    setTimeout(() => {
        leftImage.classList.remove('move-left');
        if (firstMove) {
            rightImage.classList.remove('move-right');
        } else {
            rightImage.classList.remove('move-right-second');
        }

        leftImage.style.transform = 'translateX(0) translateY(35%) scale(0.8)';
        leftImage.style.left = 'auto';
        leftImage.style.right = '0';

        rightImage.style.transform = 'translateX(12%) translateY(-42%) scale(1.25)';
        rightImage.style.right = 'auto';
        rightImage.style.left = '0';

        mainCards.classList.add('move-left-bg');

        leftImage.id = 'rightImage';
        rightImage.id = 'leftImage';

        svgRight.setAttribute('fill', '#929292');
        svgLeft.setAttribute('fill', '#23262F');

        arrowRight.removeEventListener('click', activeRightArrow);
        arrowLeft.addEventListener('click', activeLeftArrow);

        arrowRight.id = 'arrowMainNoActive';
        arrowLeft.id = 'arrowMainActive';

        firstMove = false;
    }, 2000);
}


function activeLeftArrow() {
    leftImage.classList.add('move-left-reverse');
    rightImage.classList.add('move-right-reverse');

    mainCards.classList.remove('move-left-bg');

    setTimeout(() => {
        leftImage.classList.remove('move-left-reverse');
        rightImage.classList.remove('move-right-reverse');

        leftImage.style.transform = 'translateX(0) translateY(0) scale(1)';
        leftImage.style.right = 'auto';
        leftImage.style.left = '0';

        rightImage.style.transform = 'translateX(-9.5%) translateY(0) scale(1)';
        rightImage.style.left = 'auto';
        rightImage.style.right = '0';

        mainCards.classList.add('move-right-bg');

        leftImage.id = 'leftImage';
        rightImage.id = 'rightImage';

        svgRight.setAttribute('fill', '#23262F');
        svgLeft.setAttribute('fill', '#929292');

        arrowLeft.removeEventListener('click', activeLeftArrow);
        arrowRight.addEventListener('click', activeRightArrow);

        arrowRight.id = 'arrowMainActive';
        arrowLeft.id = 'arrowMainNoActive';
    }, 2000);
}

arrowRight.addEventListener('click', activeRightArrow);
