const userPosts = document.getElementById('user-posts');

const params = new URLSearchParams(window.location.search);
const userId = params.get('userId');

async function fetchUserPosts() {
    try {
        const response = await fetch(`https://gorest.co.in/public/v1/posts?user_id=${userId}`);
        const data = await response.json();

        userPosts.innerHTML = '';
        
        data.data.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = post.title;
            userPosts.appendChild(listItem);
        });
    } catch (error) {
        console.error('Помилка отримання постів користувача:', error);
    }
}

fetchUserPosts();
