const commentList = document.getElementById('comment-list'); 

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const selectedRating = document.getElementById('selected-rating');
    let currentRating = 0;
    const sendReviewButton = document.querySelector('.btn.btn-primary');

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.getAttribute('data-rating'));

            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });

            currentRating = rating;
            selectedRating.textContent = rating;
        });
    });

    sendReviewButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const userReview = document.getElementById('user-review').value;

        document.getElementById('username').value = '';
        document.getElementById('user-review').value = '';
        selectedRating.textContent = currentRating.toString();

        stars.forEach((star, index) => {
            if (index >= currentRating) {
                star.classList.remove('active');
            }
        });

        const reviewData = {
            username: username,
            rating: currentRating, 
            review: userReview,
        };

        fetch('https://rd-api-2c05e-default-rtdb.europe-west1.firebasedatabase.app/reviews.json', {
            method: 'POST',
            body: JSON.stringify(reviewData),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Помилка відправки запиту');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Коментар додано:', data);

            const newComment = document.createElement('div');
            newComment.textContent = `User feedback ${username}: ${userReview} (Rating: ${currentRating})`;
            newComment.setAttribute('data-id', data.name);

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.setAttribute('data-id', data.name); 
            editButton.addEventListener('click', () => {
                const commentId = newComment.getAttribute('data-id');
                const newUsername = prompt('Введіть нове ім\'я користувача', username);
                const newReview = prompt('Введіть новий відгук', userReview);
                const newRating = prompt('Введіть новий рейтинг', currentRating);

                if (newUsername !== null && newReview !== null && newRating !== null) {
                    const newData = {
                        username: newUsername,
                        rating: parseInt(newRating),
                        review: newReview,
                    };

                    updateReview(commentId, newData);
                }
            });

            newComment.appendChild(editButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                const commentId = newComment.getAttribute('data-id');
                deleteReview(commentId);
            });

            newComment.appendChild(deleteButton);

            commentList.appendChild(newComment);

            stars.forEach((star) => {
                star.classList.remove('active');
            });

            document.getElementById('username').value = '';
            document.getElementById('user-review').value = '';
            document.getElementById('selected-rating').textContent = '0';
        })
        .catch((error) => {
            console.error('Помилка:', error);
        });
    });
});

function deleteReview(id) {
    fetch(
        `https://rd-api-2c05e-default-rtdb.europe-west1.firebasedatabase.app/reviews/${id}.json`,
        {
            method: "DELETE"
        }
    )
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data === null) {
            document.querySelector(`[data-id="${id}"]`).remove();
        }
    });
}

function updateReview(id, newData) {
    fetch(`https://rd-api-2c05e-default-rtdb.europe-west1.firebasedatabase.app/reviews/${id}.json`, {
        method: 'PUT',
        body: JSON.stringify(newData),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Помилка при оновленні коментаря');
        }
        return response.json();
    })
    .then((data) => {
        console.log('Коментар оновлено:', data);

        const updatedComment = document.querySelector(`[data-id="${id}"]`);
        updatedComment.textContent = `User feedback ${newData.username}: ${newData.review} (Rating: ${newData.rating})`;

        updatedComment.setAttribute('data-username', newData.username);
        updatedComment.setAttribute('data-review', newData.review);
        updatedComment.setAttribute('data-rating', newData.rating);

        renderEditDeleteButtons(updatedComment);
    })
    .catch((error) => {
        console.error('Помилка:', error);
    });
}

function renderEditDeleteButtons(commentElement) {
    const editButton = document.createElement('button');
    editButton.textContent = 'Редагувати';
    editButton.addEventListener('click', () => {
        const commentId = commentElement.getAttribute('data-id');
        const newUsername = prompt('Введіть нове ім\'я користувача', commentElement.getAttribute('data-username'));
        const newReview = prompt('Введіть новий відгук', commentElement.getAttribute('data-review'));
        const newRating = prompt('Введіть новий рейтинг', commentElement.getAttribute('data-rating'));

        if (newUsername !== null && newReview !== null && newRating !== null) {
            const newData = {
                username: newUsername,
                rating: parseInt(newRating),
                review: newReview,
            };

            updateReview(commentId, newData);
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Видалити';
    deleteButton.addEventListener('click', () => {
        const commentId = commentElement.getAttribute('data-id');
        deleteReview(commentId);
    });

    commentElement.appendChild(editButton);
    commentElement.appendChild(deleteButton);
}
