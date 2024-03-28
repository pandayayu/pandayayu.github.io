const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = {
    'pic1.jpg': 'human face closeup',
    'pic2.jpg': 'heavy clouds',
    'pic3.jpg': 'Flower blooming',
    'pic4.jpg': 'Ancient Paintings',
    'pic5.jpg': 'Butterfly on leaf'
  };
  
/* Looping through images */
imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
newImage.setAttribute('src', "images/"+ filename);
newImage.setAttribute('alt', altTexts[filename]);
thumbBar.appendChild(newImage);
})


/* Wiring up the Darken/Lighten button */