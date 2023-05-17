import {gsap} from '../../vendor/gsap.min';
import {ScrollTrigger} from '../../vendor/ScrollTrigger.min';

const initAnimateScroll = () => {

  gsap.registerPlugin(ScrollTrigger);

  const images = gsap.utils.toArray('.scroll-slider__wrap');

  const imagesTl = gsap.timeline({
    defaults: {
      ease: 'none',
    },
    scrollTrigger: {
      trigger: '.scroll-slider',
      pin: true,
      start: 'top top',
      end: `+=${images.length * 100}%`,
      scrub: true,
    },
  });

  images.forEach((image, i) => {
    if (i) {
      imagesTl.to(image, {
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      });
    }
  });
};

export {initAnimateScroll};
