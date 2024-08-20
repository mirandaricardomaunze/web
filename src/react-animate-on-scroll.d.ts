declare module 'react-animate-on-scroll' {
    import * as React from 'react';
  
    interface ScrollAnimationProps {
        animateIn?: string;
        animateOut?: string;
        duration?: number;
        delay?: number;
        offset?: number;
        animateOnce?: boolean;
        initiallyVisible?: boolean;
        className?: string;
        style?: React.CSSProperties;
        children?: React.ReactNode;
    }
  
    const ScrollAnimation: React.FC<ScrollAnimationProps>;
  
    export default ScrollAnimation;
  }