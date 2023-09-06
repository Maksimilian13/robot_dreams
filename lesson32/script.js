document.addEventListener("DOMContentLoaded", function () {
    fetchDataFromAPI();
});

function fetchDataFromAPI() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (!response.ok) {
                throw new Error("Помилка HTTP: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            const dataList = document.querySelector(".data-list");
            data.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = `ID: ${item.id}, Заголовок: ${item.title}`;
                dataList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Помилка під час виконання запиту:", error);
        });
}
