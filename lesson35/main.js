const userList = document.getElementById('user-list');

// Функція для отримання списку користувачів з API
async function fetchUsers() {
    try {
        const response = await fetch('https://gorest.co.in/public/v1/users');
        const data = await response.json();

        // Очистити список користувачів перед оновленням
        userList.innerHTML = '';

        // Додати користувачів до списку та додати обробник події для кожного користувача
        data.data.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            listItem.addEventListener('click', () => {
                // Перейти на сторінку з постами з параметром userId
                window.location.href = `user-posts.html?userId=${user.id}`;
            });
            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Помилка отримання користувачів:', error);
    }
}

// Викликати функцію для отримання списку користувачів при завантаженні сторінки
fetchUsers();
