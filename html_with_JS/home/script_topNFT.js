document.addEventListener('DOMContentLoaded', function () {

    const topNFTCards = document.querySelector('.topNFT-cards');
    const arrowRight = document.getElementById('arrowTopActive');
    const arrowLeft = document.getElementById('arrowTopNoActive');
    const svgRight = arrowRight.querySelector('svg');
    const svgLeft = arrowLeft.querySelector('svg');

    let currentIndex = 0;  // Начальный индекс на нулевом элементе
    const cardWidth = 281 * 2; // Ширина карточки, учитывая margin

    let lastScrollTime = 0;
    const scrollCooldown = 2000; // Минимальное время между вызовами прокрутки (в миллисекундах)

    function createMedCard(cardData) {
        const card = document.createElement('div');
        card.className = 'topNFT-card medium-card';
        card.innerHTML = `
            <img class="medium-card-img" src="${cardData.imgSrc}">
            <div class="medium-time-bg">
                <p class="medium-time">${cardData.time}</p>
            </div>
            <div class="medium-card-info">
                <p class="medium-card-title">${cardData.title}</p>
                <div class="medium-card-container">
                    <div>
                        <p class="medium-card-subtitle">Current bid</p>
                        <div class="medium-icon-container">
                            <img class="medium-card-icon" src="${cardData.iconSrc}">
                            <p class="medium-card-price">${cardData.currentBid}</p>
                        </div>
                    </div>
                    <button class="button-card">PLACE BID</button>
                </div>
            </div>
        `;
        return card;
    }

    function renderMedCards() {
        topNFTCards.innerHTML = '';
        cardTopNFT.forEach(cardData => {
            const card = createMedCard(cardData);
            topNFTCards.appendChild(card);
        });
        updateSliderPosition(0); // Обновляем начальную позицию слайдера
    }

    function updateSliderPosition(direction) {
        const topNFTCard = document.querySelectorAll('.topNFT-card');
        if (direction === 1 && currentIndex < cardTopNFT.length - (cardTopNFT.length - 1)) {
            currentIndex++;
        } else if (direction === -1 && currentIndex > -1) {
            currentIndex--;
        }

        const offset = -currentIndex * (cardWidth + 40); // Смещение всех карточек влево/вправо
        Array.from(topNFTCard).forEach(card => {
            card.style.transition = 'transform 2s ease-in-out'; // Добавляем плавный переход
            card.style.transform = `translateX(${offset}px)`;

            showActiveArrow(svgLeft, svgRight, currentIndex);
        });
    }

    function moveRight() {
        updateSliderPosition(1);

    }

    function moveLeft() {
        updateSliderPosition(-1);
    }

    function showActiveArrow(left, right, currentIndex) {
        if (currentIndex === cardTopNFT.length - (cardTopNFT.length - 1)) {
            svgRight.setAttribute('fill', '#929292');
        } else {
            svgRight.setAttribute('fill', '#23262F');
        }

        if (currentIndex === -1) {
            svgLeft.setAttribute('fill', '#929292');
        } else {
            svgLeft.setAttribute('fill', '#23262F');
        }
    }

    if (cardTopNFT.length > 4) {
        svgRight.setAttribute('fill', '#23262F');
        svgLeft.setAttribute('fill', '#23262F');

        arrowRight.addEventListener('click', moveRight);
        arrowLeft.addEventListener('click', moveLeft);

        // Обработчик прокрутки колёсика мыши
        topNFTCards.addEventListener('wheel', function (event) {
            event.preventDefault();
            const delta = event.deltaX || event.deltaY;

            const now = Date.now();
            if (now - lastScrollTime < scrollCooldown) {
                return; // Игнорировать прокрутку, если не прошло достаточно времени
            }

            lastScrollTime = now;

            if (delta > 0) {
                moveRight();
            } else {
                moveLeft();
            }
        });
    }

    renderMedCards();
});
