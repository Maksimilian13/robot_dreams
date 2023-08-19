function toggleImageClass() {
    const img = document.querySelectorAll('img');
    
    img.forEach(element => {
      if (element.classList.contains('img-enlargen')) {
        element.classList.remove('img-enlargen');
      } else {
        element.classList.add('img-enlargen');
      }
    });
  }

  module.exports = toggleImageClass;