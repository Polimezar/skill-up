import {iosVhFix} from './utils/ios-vh-fix';
// открытие меню
import {initShowHeader} from './modules/init-show-header';
// инициализация карты 1
import {initMap} from './modules/map/init-map';
// инициализация карты 2
import {initMapTwo} from './modules/map/init-map-2';
// инициализация карты 3
import {initMapThree} from './modules/map/init-map-3';
// инициализация карты 4
import {initMapFour} from './modules/map/init-map-4';
// экран загрузки
import {initLoader} from './modules/init-loader';
// анимация главного экрана
import {initAnimateIntro} from './modules/animation/init-animate-intro';
//  анимация появления текста на главном экране
import {curtainsAnimation} from './modules/animation/init-curtains-animation';
// анимация появления блоков
import {initAnimateFade} from './modules/animation/init-animate-fade';
// анимация блоков при скролле
import {initAnimateScroll} from './modules/animation/init-animate-scroll';

// ---------------------------------

initLoader();

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initShowHeader();
    initMap();
    initMapTwo();
    initMapThree();
    initMapFour();

    initAnimateIntro();
    curtainsAnimation();
    initAnimateFade();
    initAnimateScroll();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
