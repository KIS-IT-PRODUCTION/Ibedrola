document.addEventListener('DOMContentLoaded', () => {

    // Логіка для кнопки меню
    const menuToggle = document.querySelector('.menu-toggle');
    const menuWord = menuToggle.querySelector('.menu-word');
    const menuDot = menuToggle.querySelector('.menu-dot');
    const menuPanel = document.querySelector('.menu-panel');

    if (menuToggle && menuPanel && menuWord && menuDot) {
        menuToggle.addEventListener('click', () => {
            const isMenuOpen = menuPanel.classList.contains('active');

            if (isMenuOpen) {
                menuPanel.classList.remove('active');
                menuToggle.classList.remove('open');
                menuWord.textContent = 'menu';
                menuDot.textContent = '.';
                document.body.style.overflow = '';
            } else {
                menuPanel.classList.add('active');
                menuToggle.classList.add('open');
                menuWord.textContent = 'close';
                menuDot.textContent = '.';
                document.body.style.overflow = 'hidden';
            }
        });

        const menuLinks = menuPanel.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuPanel.classList.remove('active');
                menuToggle.classList.remove('open');
                menuWord.textContent = 'menu';
                menuDot.textContent = '.';
                document.body.style.overflow = '';
            });
        });
    }

    // Логіка для першого слайдера "In which industries"
    const industriesSliderContainer = document.querySelector('.industries-slider-container');
    const industriesNextButton = document.querySelector('.trends-next-button');
    const industriesPrevButton = document.querySelector('.trends-prev-button');
    const industriesScrollAmount = 270;

    if (industriesSliderContainer && industriesNextButton && industriesPrevButton) {
        industriesNextButton.addEventListener('click', () => {
            industriesSliderContainer.scrollBy({
                left: industriesScrollAmount,
                behavior: 'smooth'
            });
        });

        industriesPrevButton.addEventListener('click', () => {
            industriesSliderContainer.scrollBy({
                left: -industriesScrollAmount,
                behavior: 'smooth'
            });
        });
    }

    // Логіка для другого слайдера "Technologies and Innovations"
    const trendsSliderContainer = document.querySelector('.trends-slider-container');
    const trendsNextButton = document.querySelector('.trends-next-button-second');
    const trendsPrevButton = document.querySelector('.trends-prev-button-second');
    const trendsScrollAmount = 400;

    if (trendsSliderContainer && trendsNextButton && trendsPrevButton) {
        trendsNextButton.addEventListener('click', () => {
            trendsSliderContainer.scrollBy({
                left: trendsScrollAmount,
                behavior: 'smooth'
            });
        });

        trendsPrevButton.addEventListener('click', () => {
            trendsSliderContainer.scrollBy({
                left: -trendsScrollAmount,
                behavior: 'smooth'
            });
        });
    }

});