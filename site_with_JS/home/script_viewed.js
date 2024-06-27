const viewedCards = document.querySelector('.viewed-cards-container');

function createCard(cardData, index) {
    const card = document.createElement('div');
    card.className = 'viewed-cards-container';
    const percentClass = cardData.percent.startsWith('+') ? 'percent-positive' : cardData.percent.startsWith('-') ? 'percent-negative' : '';
    card.innerHTML = `
        <div class="viewed-card">
            <div class="viewed-card-main">
            <img class="viewed-card-img" src="${cardData.imgSrc}">
            <div class="viewed-card-circle">${index + 1}</div>
            <div class="viewed-card-name">
                <h1>${cardData.fullName}</h1>
                <p>${cardData.shortName}</p>
            </div>
        </div>
        <div class="viewed-card-price">
            <div class="viewed-card-price-main">
                <img src="${cardData.iconSrc}">
                <p>${cardData.price}</p>
            </div>
            <p class="${percentClass}">${cardData.percent}</p>
        </div>
        </div>
    `;
    return card;
}

function renderViewed() {
    viewedCards.innerHTML = '';
    recentViewed.forEach((cardData, index) => {
        const card = createCard(cardData, index);
        viewedCards.appendChild(card);
    });
}

renderViewed();
