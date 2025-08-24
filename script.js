document.addEventListener('DOMContentLoaded', () => {
    // --- Меню-бургер ---
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPanel = document.querySelector('.menu-panel');
    const header = document.querySelector('.header');
    const body = document.body;

    if (menuToggle && menuPanel && header) {
        menuToggle.addEventListener('click', () => {
            const isMenuOpen = menuPanel.classList.toggle('active');
            header.classList.toggle('menu-open', isMenuOpen);
            menuToggle.classList.toggle('active', isMenuOpen);
            body.classList.toggle('menu-open-body', isMenuOpen); // Використовуємо клас для блокування
        });
    }

    // --- Універсальна логіка для всіх слайдерів ---
    
    // Знаходимо всі секції, які містять слайдери
    const sliderSections = document.querySelectorAll('.industries-section, .trends-section');

    // Проходимо по кожній секції зі слайдером
    sliderSections.forEach(section => {
        const sliderContainer = section.querySelector('.industries-slider-container, .trends-slider-container');
        const nextButton = section.querySelector('.trends-next-button');
        const prevButton = section.querySelector('.trends-prev-button');
        
        // Визначаємо величину прокрутки. Можна налаштувати для кожного слайдера окремо, якщо потрібно.
        // Наприклад, перевіряючи, в якій секції ми знаходимось.
        let scrollAmount = 300; // Значення за замовчуванням
        if (section.classList.contains('trends-section')) {
            scrollAmount = 400; // Для секції trends
        } else if (section.classList.contains('industries-section')) {
            scrollAmount = 270; // Для секції industries
        }

        if (sliderContainer && nextButton && prevButton) {
            // Обробник для кнопки "вперед"
            nextButton.addEventListener('click', () => {
                sliderContainer.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });

            // Обробник для кнопки "назад"
            prevButton.addEventListener('click', () => {
                sliderContainer.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            });
        }
    });
});
