const navbar = document.querySelector('.navbar');
const brandPictures = document.querySelectorAll('.brand-picture');
const brandPicture1 = brandPictures[0];
const brandPicture2 = brandPictures[1];
const textSection = document.querySelector('.text-section');


// BREATHING ANIMATION BRANDPICTURES
const toggleBreathe = pic => {
    if (pic.classList.contains('breathe')) {
        pic.classList.remove('breathe')
    }
    else {
        pic.classList.add('breathe');
    }
}
const pictureBreathe = (pic1, pic2, interval) => {
    setInterval(() => {
        toggleBreathe(pic1);
        toggleBreathe(pic2)
    }, interval)
}
pictureBreathe(brandPicture1, brandPicture2, 5000);
// BREATHING ANIMATION BRANDPICTURES END
