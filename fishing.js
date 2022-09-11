const images = document.getElementById('images')
const button = document.getElementById('button')




images.style.display = 'none'




let imageArray = ['images/fish-1.jpg', 'images/fish-2.jpg', 'images/fish-4.jpg', 'images/jack-murrey-TkSizGUyMh8-unsplash.jpg', 'images/fish-3.jpg'];
// const time = 3000;



button.addEventListener('click', function() {
        images.style.display = 'block'
        changeImage()
    })
    // console.log(imageArray)
let imageIndex = 0;

function changeImage() {

    images.setAttribute('src', imageArray[imageIndex])
    imageIndex++;
    if (imageIndex > 4) {
        imageIndex = 0;
    }

}

function buttonPlaceChange() {
    button.style.position = ('0 ,50px')
}


// toggling but only two images

// let i = 0;
// let time = 2000;
// let toggle = true;

// images[0] = 'images/tomas.png'
// images[1] = 'images/jack-murrey-TkSizGUyMh8-unsplash.jpg'
// images[2] = 'images/fish-4.jpg'
// images[3] = 'images/Trout.jpg'
// images[4] = 'images/jack-murrey-TkSizGUyMh8-unsplash.jpg'



// button.addEventListener('click', () => {
//     toggle = !toggle;

//     if (toggle) {
//         images.src = images[0];
//         !toggle
//     } else {
//         images.src = images[1]
//     }

// })



// function changeImg() {
//     images.src = images[i];
//     if (i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     setTimeout('changeImg()', time)
// }
// window.onload = changeImg



// let i = 0;
// let images = [];
// let time = 3000;

// images[0] = 'fish-1.jpg'
// images[1] = 'fish-2.jpg'
// images[2] = 'fish-3.jpg'

// // Change Image

// function changeImg() {
//     document.buttons.src = images[i];
//     if (i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     setTimeout('changeImg()', time)
// }