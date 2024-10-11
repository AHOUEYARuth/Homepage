// let images = document.querySelector('.image');
// let items = document.querySelectorAll('.slide');
// let btnLeft = document.querySelector('#left');
// let btnRight = document.querySelector('#right');
// let active = 0;
// let tab = ["desktop-image-hero-1.jpg" , "desktop-image-hero-2.jpg" , "desktop-image-hero-3.jpg"]
// content = document.querySelector('#main')
// tab.forEach(image => {
//     let img = document.createElement('img');
//     img.src = `images/${image}`;
//     images.appendChild(img);
// }); 

let images = document.querySelector('.image');
let btnLeft = document.querySelector('#left');
let btnRight = document.querySelector('#right');
let active = 0;
let tab = ["desktop-image-hero-1.jpg", "desktop-image-hero-2.jpg", "desktop-image-hero-3.jpg"];

tab.forEach((image, index) => {
    let img = document.createElement('img');
    img.src = `images/${image}`;
    if (index === 0) img.classList.add('active'); // Show the first image by default
    images.appendChild(img);
});

const updateActiveImage = () => {
    let items = images.querySelectorAll('img');
    items.forEach((img, index) => {
        img.classList.toggle('active', index === active);
    });
};

btnLeft.addEventListener('click', () => {
    active = (active > 0) ? active - 1 : tab.length - 1;
    updateActiveImage();
});

btnRight.addEventListener('click', () => {
    active = (active < tab.length - 1) ? active + 1 : 0;
    updateActiveImage();
});
