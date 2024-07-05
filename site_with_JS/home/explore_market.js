const exploreMarketCards = document.querySelector('.explore-market-cards');

let countCard = 1;

function createMedCard(cardData, index) {
    const card = document.createElement('div');
    card.className = card.className = `explore-market-card medium-card explore-card-${index}`;
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
    exploreMarketCards.innerHTML = '';
    cardExploreMarket.forEach((cardData, index) => {
        const card = createMedCard(cardData, index);
        exploreMarketCards.appendChild(card);
    });
}

renderMedCards();