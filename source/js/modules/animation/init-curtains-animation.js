import {gsap} from '../../vendor/gsap.min';
import {ScrollTrigger} from '../../vendor/ScrollTrigger.min';

const curtainsAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const curtains = gsap.utils.toArray('[data-text="curtains"]');

  curtains.forEach((curtain) => {
    const curtainsText = curtain.querySelectorAll('.curtains__text');

    gsap.to(curtainsText, {
      // Перемещение по вертикали
      y: 0,
      // продолжительность
      duration: 1.5,
      // задержка
      delay: 1.5,
      // opacity: 1,
      // как будет работать анимация
      ease: 'power1.out',
    });
  });
};

export {curtainsAnimation};
