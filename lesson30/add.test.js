const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.window = dom.window;

const toggleImageClass = require('./add.js');

describe('toggleImageClass', () => {
  it('should add the img-enlargen class', () => {
    const imgElement = document.createElement('img');
    imgElement.classList.add('img-enlargen');

    toggleImageClass(imgElement);

    expect(imgElement.classList.contains('img-enlargen')).toBe(true);
  });

  it('should remove the img-enlargen class', () => {
    const imgElement = document.createElement('img');

    toggleImageClass(imgElement);

    expect(imgElement.classList.contains('img-enlargen')).toBe(false);
  });
});
  
  
  
  
  
  
  