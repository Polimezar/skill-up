import {gsap} from '../../vendor/gsap.min';
import {ScrollTrigger} from '../../vendor/ScrollTrigger.min';

const initAnimateIntro = () => {
  gsap.registerPlugin(ScrollTrigger);
  const blockIntro = document.querySelector('[data-animate="intro"]');

  if (!blockIntro) {
    return;
  }

  const blockScale = blockIntro.querySelector('.container');

  setTimeout(() => {
    blockIntro.classList.add('is-shown');
  }, 2000);

  gsap.to(blockScale, {scale: 0.4,
    scrollTrigger: {
      trigger: blockScale,
      start: 'top 50%',
      end: '+=2000',
      scrub: true,
    },
  });
};

export {initAnimateIntro};
