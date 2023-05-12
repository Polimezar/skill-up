import {ScrollLock} from '../utils/scroll-lock';


const initPreloader = ()=> {
  const preloader = document.querySelector('.preloader');
  const scrollLock = new ScrollLock();

  scrollLock.disableScrolling();

  window.setTimeout(function () {
    preloader.classList.add('hidden');
    // preloader.remove();
    scrollLock.enableScrolling();
  }, 1000);

};

export {initPreloader};
