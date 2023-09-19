const userList = document.getElementById('user-list');

async function fetchUsers() {
    try {
        const response = await fetch('https://gorest.co.in/public/v1/users');
        const data = await response.json();

        userList.innerHTML = '';

        data.data.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            listItem.addEventListener('click', () => {
                window.location.href = `user-posts.html?userId=${user.id}`;
            });
            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Помилка отримання користувачів:', error);
    }
}

fetchUsers();
