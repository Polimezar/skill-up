import {gsap} from '../../vendor/gsap.min';
import {ScrollTrigger} from '../../vendor/ScrollTrigger.min';

const initAnimateFade = () => {
  const elements = document.querySelectorAll('[data-fade]');
  const elementsScale = document.querySelectorAll('[data-fade-scale]');
  const scale = document.querySelectorAll('[data-scale]');
  const transform = document.querySelectorAll('[data-transform]');

  if (!elements.length) {
    return;
  }

  window.gsap.set(elementsScale, {scale: 0.1});

  ScrollTrigger.batch(elementsScale, {
    onEnter: (batch) => window.gsap.to(batch, {
      scale: 1,
      duration: 1,
      stagger: 0.3,
      ease: 'slow',
    }),
    start: 'top 100%',
  });

  window.gsap.set(elements, {opacity: 0});

  ScrollTrigger.batch(elements, {
    onEnter: (batch) => window.gsap.to(batch, {
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      ease: 'slow',
    }),
    start: 'top 100%',
  });

  ScrollTrigger.create({
    trigger: scale,
    animation: gsap.fromTo(scale, {scale: 0.3}, {scale: 1}),
    end: 'center center',
    scrub: true,
    ease: 'slow',
  });

  ScrollTrigger.create({
    trigger: transform,
    animation: gsap.fromTo(transform, {y: -100}, {y: 0}),
    end: 'center center',
    scrub: true,
    ease: 'slow',
  });
};

export {initAnimateFade};
