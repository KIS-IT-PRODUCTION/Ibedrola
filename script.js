document.addEventListener('DOMContentLoaded', function () {
    // --- Існуючий код для головного меню ---
    const menuToggle = document.querySelector('.menu-toggle');
    const menuPanel = document.querySelector('.menu-panel');
    const header = document.querySelector('.header');
    const pageOverlay = document.querySelector('.page-overlay');
    const body = document.body;

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        menuPanel.classList.toggle('active');
        header.classList.toggle('menu-open');
        body.classList.toggle('menu-open');
    });

    pageOverlay.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        menuPanel.classList.remove('active');
        header.classList.remove('menu-open');
        body.classList.remove('menu-open');
    });

    // --- НОВИЙ КОД: логіка для випадаючих меню по кліку ---
    const dropdownToggles = document.querySelectorAll('.menu-navigation .has-dropdown > a');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            // Перевіряємо, чи ми на мобільному пристрої (де меню стає колонкою)
            if (window.innerWidth <= 1024) {
                // Забороняємо посиланню переходити за адресою
                event.preventDefault();

                // Знаходимо батьківський елемент <li>
                const parentLi = this.parentElement;

                // Перемикаємо клас 'open', щоб показати або приховати підменю
                parentLi.classList.toggle('open');
            }
        });
    });

     const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordionItem = this.parentElement;
            
            // Якщо елемент вже активний, просто закриваємо його
            if (accordionItem.classList.contains('active')) {
                accordionItem.classList.remove('active');
            } else {
                // Інакше закриваємо всі інші...
                accordionHeaders.forEach(otherHeader => {
                    otherHeader.parentElement.classList.remove('active');
                });
                // ... і відкриваємо поточний
                accordionItem.classList.add('active');
            }});
    });
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
