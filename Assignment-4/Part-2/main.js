//////////////////////////////////////////////////////
// Name: Ayush Panday
// Course: INFT-1206-05-Web Development Fundamentals
// This is the main js file for the part two, image gallery.
/////////////////////////////////////////////////////

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
});

//selects all images
const thumbImages = document.querySelectorAll('.thumb-bar img');

//adding the click event
thumbImages.forEach(thumbImage => {
    thumbImage.addEventListener('click', function() {
      displayedImage.src = this.src;
      displayedImage.alt = this.alt;
    });
});


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', function() {

    //checks and changes the class and changes it from dark to light.
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';

        //apply overlay to darken
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    } else {

        //checks and changes button class, this is from light to dark.
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';

        //removes the overlay
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});