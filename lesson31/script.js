document.addEventListener("DOMContentLoaded", function() {

    let newYearDate = new Date(new Date().getFullYear() + 1, 0, 1);
  
    function updateCountdown() {
        let currentDate = new Date();
        let timeRemaining = newYearDate - currentDate;
  
        if (timeRemaining > 0) {
            let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
            document.getElementById('countdown').innerHTML = `Залишилося часу до Нового Року : ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        } else {
            document.getElementById('countdown').innerHTML = 'Час вийшов!';
        }
    }
    setInterval(updateCountdown, 1000);
});