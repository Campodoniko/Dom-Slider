// получаем элементы слайдера
const slider = document.querySelector('.slider');
const thumb = slider.querySelector('.thumb');
const range = slider.querySelector('.range');
const value = slider.querySelector('.value');

// задаем минимальное и максимальное значение слайдера
const minValue = 0;
const maxValue = 100;
// задаем начальное значение слайдера по умолчанию
let currentValue = 50;

// функция для обновления интерфейса слайдера
function updateSlider() {
// вычисляем процентное значение выбранной позиции бегунка
const percent = (currentValue - minValue) / (maxValue - minValue) * 100;
// задаем стиль для бегунка и полоски диапазона
thumb.style.left = percent + '%';
range.style.width = percent + '%';
// обновляем отображение выбранного значения слайдера
value.textContent = currentValue;
}

// обработчик события нажатия кнопки мыши на бегунке
thumb.addEventListener('mousedown', (event) => {
// запоминаем начальные координаты нажатия мыши
const startX = event.clientX;
const thumbLeft = thumb.offsetLeft;
// обработчик события перемещения мыши
const onMouseMove = (event) => {
// вычисляем смещение бегунка по горизонтали
const shiftX = event.clientX - startX;
let newLeft = thumbLeft + shiftX;
// ограничиваем смещение бегунка по границам слайдера
const sliderRect = slider.getBoundingClientRect();
if (newLeft < 0) {
newLeft = 0;
}
if (newLeft > sliderRect.width) {
newLeft = sliderRect.width;
}
// вычисляем процентное значение выбранной позиции бегунка
const percent = newLeft / sliderRect.width * 100;
currentValue = Math.round((maxValue - minValue) * percent / 100 + minValue);
updateSlider(); // обновляем интерфейс
};
// обработчик события отпускания кнопки мыши
const onMouseUp = () => {
document.removeEventListener('mousemove', onMouseMove);
document.removeEventListener('mouseup', onMouseUp);
};
// подключаем обработчики событий перемещения и отпускания кнопки мыши
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);
});

// задаем начальное значение слайдера по умолчанию
updateSlider(0);




