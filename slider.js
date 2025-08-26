document.addEventListener('DOMContentLoaded', () => {
    // 1. Знаходимо всі необхідні елементи на сторінці
    const container = document.querySelector('.industries-slider-container');
    const track = document.querySelector('.industries-slider-track');
    const prevButton = document.querySelector('.trends-prev-button');
    const nextButton = document.querySelector('.trends-next-button');
    const firstColumn = document.querySelector('.industries-column');

    // Перевірка, чи всі елементи існують, щоб уникнути помилок
    if (!container || !track || !prevButton || !nextButton || !firstColumn) {
        console.error("Один або декілька елементів слайдера не знайдено!");
        return;
    }

    // 2. Обчислюємо відстань для прокрутки
    // Отримуємо значення відступу (gap) між колонками прямо з CSS
    const gap = parseInt(getComputedStyle(track).getPropertyValue('gap'), 10);
    // Повна ширина для прокрутки = ширина колонки + відступ
    const scrollAmount = firstColumn.offsetWidth + gap;

    // 3. Додаємо обробники подій для кнопок
    // Прокрутка вперед при кліку на кнопку "next"
    nextButton.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth' // робить прокрутку плавною
        });
    });

    // Прокрутка назад при кліку на кнопку "prev"
    prevButton.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth' // робить прокрутку плавною
        });
    });
});