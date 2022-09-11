let i = 0;
let images = [];
let time = 3000;

images[0] = 'images/jack-murrey-TkSizGUyMh8-unsplash.jpg'
images[1] = 'images/fish-5.jpg'
images[2] = 'images/FishHook.svg'

// Change Image

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time)
}
window.onload = changeImg