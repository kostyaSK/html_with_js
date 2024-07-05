const questionsCards = document.querySelector('.questions-cards');

function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'questions-card';
    card.innerHTML = `
        <div class="questions-card-main">
            <h2 class="questions-card-title">${cardData.title}</h2>
            <button class="button-questions-black">+</button>
        </div>
        <div class="questions-card-info">
            <p>${cardData.answer}</p>
        </div>
        <div class="questions-line"></div>
    `;
    return card;
}

function renderQuestions() {
    questionsCards.innerHTML = '';
    cardQuestions.forEach((cardData) => {
        const card = createCard(cardData);
        questionsCards.appendChild(card);
    });
}

renderQuestions();

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.questions-cards').addEventListener('click', function (event) {
        if (event.target.classList.contains('button-questions-black') ||
            event.target.classList.contains('button-questions-grey')) {
            const button = event.target;
            const cardInfo = button.closest('.questions-card').querySelector('.questions-card-info');
            cardInfo.classList.toggle('active');
            button.textContent = button.textContent === '+' ? '-' : '+';
            button.classList.toggle('button-questions-black');
            button.classList.toggle('button-questions-grey');
        }
    });
});
