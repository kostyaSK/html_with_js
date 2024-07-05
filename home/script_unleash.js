// --------------------------------- Генерация секции Recent Viewed ---------------------------------
const viewedCardsUnleash = document.querySelector('.unleash-viewed-cards-container');

function createViewedCard(cardData, index) {
    const card = document.createElement('div');
    card.className = 'unleash-viewed-cards-container';
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
    viewedCardsUnleash.innerHTML = '';
    recentViewed.forEach((cardData, index) => {
        const card = createViewedCard(cardData, index);
        viewedCardsUnleash.appendChild(card);
    });
}

renderViewed();


// --------------------------------- Генерация секции Best Sellers ---------------------------------
const sellersCardsUnleash = document.querySelector('.best-sell-cards-container');

function createSellersCard(cardData, index, subscribe, subscribeStyle) {
    const card = document.createElement('div');
    card.className = 'best-sell-cards-container';
    card.innerHTML = `
        <div class="best-sell-card">
            <div class="best-sell-card-main">
                <img class="best-sell-card-img" src="${cardData.imgSrc}">
                <div class="best-sell-card-circle">${index + 1}</div>
                <div class="best-sell-card-name">
                    <h1>${cardData.fullName}</h1>
                    <p>${cardData.shortName}</p>
                </div>
            </div>
            <button id="button-sub-${index}" class="${subscribeStyle}">${subscribe}</button>
        </div>
    `;
    return card;
}

function renderSellers() {
    sellersCardsUnleash.innerHTML = '';
    bestSellers.forEach((cardData, index) => {
        const subscribe = (cardData.subscribe) ? 'Unfollow' : 'Follow';
        const subscribeStyle = (cardData.subscribe) ? 'best-sell-black-button' : 'best-sell-grey-button';
        const card = createSellersCard(cardData, index, subscribe, subscribeStyle);
        sellersCardsUnleash.appendChild(card);

        const button = card.querySelector(`#button-sub-${index}`);
        button.addEventListener('click', function() {
            cardData.subscribe = !cardData.subscribe;
            renderSellers();
        });
    });
}

renderSellers();


// --------------------------------- Генерация секции Notifications ---------------------------------
const notificationsUnleash = document.querySelector('.unleash-notifications-container');

function createNotifications(cardData) {
    const card = document.createElement('div');
    card.className = 'unleash-notifications-container';
    card.innerHTML = `
        <div class="unleash-notification">
            <div class="unleash-notification-main">
                <div class="notification-small-img-wrapper">
                    <img class="notification-small-img" src="${cardData.imgSrc}">
                </div>
                <img class="notification-mark" src="${cardData.iconSrc}">
                <div class="notification-text">
                    <h4><span>${cardData.title[0]}</span>${cardData.title[1]}</h4>
                    <p>${cardData.subtitle[0]}<br>
                    <span>${cardData.subtitle[1]}</span></p>
                </div>
            </div>
            <img class="notification-big-img" src="${cardData.imgBigSrc}">
        </div>  
    `;
    return card;
}

function renderNotifications() {
    notificationsUnleash.innerHTML = '';
    notifications.forEach((cardData, index) => {
        const card = createNotifications(cardData);
        notificationsUnleash.appendChild(card);
    });
}

renderNotifications();