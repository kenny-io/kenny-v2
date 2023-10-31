import SplitType from 'split-type';
import gsap from 'gsap';

export const useSplitTextAnimation = (elementId: string) => {
  if (typeof document !== 'undefined') {
    const text = SplitType.create(elementId);
    if (text.chars) {
      for (let i = 0; i < text.chars.length; i++) {
        const char = text.chars[i];
        char.classList.add('translate-y-full');
      }
      gsap.to(text.chars, {
        duration: 0.5,
        delay: 0.02,
        y: 0,
        stagger: 0.05,
      });
    }
  }
};
