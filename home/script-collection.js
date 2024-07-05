const colCards = document.querySelector('.collection-cards');

function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'collection-cards';
    card.innerHTML = `
        <div class="collection-card">
            <div>
                <div class="collection-card-main">
                    <img class="collection-card-img" src="${cardData.imgSrc}">
                    <div class="collection-card-name">
                        <h1>${cardData.fullName}</h1>
                        <p>${cardData.shortName}</p>
                    </div>
                </div>
                <div class="collection-card-info">
                    <div class="collection-card-volume">
                        <img src="${cardData.iconSrc}">
                        <p>${cardData.volume}</p>
                    </div>
                    <div class="collection-card-percent">
                        <p>${cardData.percent}</p>
                    </div>
                    <div class="collection-card-price">
                        <img src="${cardData.iconSrc}">
                        <p>${cardData.price}</p>
                    </div>
                    <div class="collection-card-owners">
                        <p>${cardData.owner}</p>
                    </div>
                    <div class="collection-card-items">
                        <p>${cardData.item}</p>
                    </div>
                </div>
            </div>
            <div class="collection-card-line"></div>
        </div>
    `;
    return card;
}

function renderCollection() {
    colCards.innerHTML = '';
    collectionCards.forEach((cardData) => {
        const card = createCard(cardData);
        colCards.appendChild(card);
    });
}

renderCollection();