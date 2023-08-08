let img = document.querySelectorAll('img');

img.forEach((element) => {
   element.addEventListener('click', () => {
        if (element.classList.contains('img-enlargen')) {
           element.classList.remove('img-enlargen');
       } else {
            element.classList.add('img-enlargen');
        }
    });
});



