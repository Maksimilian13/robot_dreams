// Функція для додавання нового твіта
function addTweet(tweetText) {
    const tweetList = document.getElementById('tweet-list');
    const tweetItem = document.createElement('li');
    tweetItem.className = 'tweet-item';
    tweetItem.innerHTML = `
        <p>${tweetText}</p>
        <button class="delete-button">Видалити</button>
    `;
    tweetList.appendChild(tweetItem);

    // Додавання обробника подій для кнопки видалення
    const deleteButton = tweetItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        tweetList.removeChild(tweetItem);
    });
}

// Отримання форми та поля вводу тексту
const tweetForm = document.getElementById('tweet-form');
const tweetInput = document.getElementById('tweet-text');

// Додавання обробника подій для форми створення твіта
tweetForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігаємо стандартному перезавантаженню сторінки

    const tweetText = tweetInput.value.trim();
    if (tweetText) {
        addTweet(tweetText);
        tweetInput.value = ''; // Очищення поля вводу
    }
});

