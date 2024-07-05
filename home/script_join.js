window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    const startAnimation = 4840;
    const endAnimation = 6580;
    const animationRange = endAnimation - startAnimation;

    function imgAnimation (images, progress, centerX, centerY, radius) {
        images.forEach(imgData => {
            const img = document.querySelector(imgData.selector);
            const angle = progress * imgData.angleMultiplier * Math.PI;

            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
        });
    }

    if (scrollPosition >= startAnimation && scrollPosition <= endAnimation) {
        const progress = (scrollPosition - startAnimation) / animationRange;
        const centerX = 755; // Центр по горизонтали
        const centerY = 745; // Центр по вертикали
        const radius = -530; // Радиус круговой траектории

        const images = [
            { selector: '.join-animation-img1', angleMultiplier: 0.7 },
            { selector: '.join-animation-img2', angleMultiplier: 1.7 },
            { selector: '.join-animation-img3', angleMultiplier: 2.7 },
            { selector: '.join-animation-img4', angleMultiplier: 3.4 },
            { selector: '.join-animation-img5', angleMultiplier: 4.2 }
        ];

       imgAnimation(images, progress, centerX, centerY, radius);
    }

    if (scrollPosition >= startAnimation && scrollPosition <= endAnimation) {
        const progress = (scrollPosition - startAnimation) / animationRange;
        const centerX = 755; // Центр по горизонтали
        const centerY = 745; // Центр по вертикали
        const radius = -415; // Радиус круговой траектории

        const images = [
            { selector: '.join-animation-img6', angleMultiplier: -4.3 },
            { selector: '.join-animation-img7', angleMultiplier: -3.1 },
            { selector: '.join-animation-img8', angleMultiplier: -2.1 },
            { selector: '.join-animation-img9', angleMultiplier: -1.7 }
        ];

        imgAnimation(images, progress, centerX, centerY, radius);
    }
});