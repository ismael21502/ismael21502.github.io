function initCarousel() {
    const leftArrow = document.querySelector('.carouselLeft');
    const rightArrow = document.querySelector('.carouselRight');
    const carouselDots = document.querySelectorAll('.carouselDot');
    const images = Array.from(document.querySelector('.carouselTrack').children);

    if (!leftArrow || !rightArrow || carouselDots.length === 0) return;
    let currentIndex = 0;

    leftArrow.addEventListener("click",()=>{
        if(currentIndex > 0) currentIndex-=1
        else currentIndex = carouselDots.length-1
        updateActiveDot(carouselDots, currentIndex);
        updateActiveImage(images, currentIndex)
    })
    rightArrow.addEventListener("click", () => {
        if(currentIndex < carouselDots.length-1) currentIndex+=1
        else currentIndex = 0
        updateActiveDot(carouselDots, currentIndex);
        updateActiveImage(images, currentIndex)
    })

    carouselDots.forEach((dot, i) => {
        dot.addEventListener("click", ()=>{
            currentIndex = i;
            updateActiveDot(carouselDots, currentIndex)
            updateActiveImage(images, currentIndex)
        })
    })
}

initCarousel()

function updateActiveDot(dots, currentIndex){
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentIndex) dot.classList.add('active')
    })
}

function updateActiveImage(images, currentIndex){
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === currentIndex) img.classList.add('active')
    })
}