document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    let totalImages = 0;

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('card-visible');
            const smallImages = card.querySelectorAll('.small-image');
            totalImages += smallImages.length;

            smallImages.forEach((smallImage, imgIndex) => {
                setTimeout(() => {
                    smallImage.classList.remove('hidden');
                    smallImage.classList.add('revealed');
                    totalImages--;

                    // Check if this is the last image being revealed
                    if (totalImages === 0) {
                        document.getElementById('next-button').classList.remove('hidden');
                    }
                }, 5000 * (imgIndex + 1)); // Reveals small images with a 3-second interval
            });
        }, index * 1000);
    });
});
