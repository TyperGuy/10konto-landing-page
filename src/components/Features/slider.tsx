import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FeatureIlustrationListMobile,
  SliderControlContainer,
  SliderControlDot,
  SliderControlDots,
} from './styles';
import { SliderControlButtons } from '../Reviews/utils';
import AppStore from '~/assets/appstore.svg';
import GooglePlay from '~/assets/google-play.svg';

const CustomSlider = ({ slides, id }: { slides: any[]; id?: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [startX, setStartX] = useState<number | null>(null);
  const [endX, setEndX] = useState<number | null>(null);
  const sliderItemRef = useRef<HTMLDivElement | null>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log('handleTouchStart');
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log('handleTouchMove');
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    console.log('handleTouchEnd');
    if (startX && endX) {
      const diffX = startX - endX;
      if (diffX > 50) {
        // Swipe right to left
        console.log('Swipe left');
        handlePrev();
      } else if (diffX < -50) {
        // Swipe left to right
        console.log('Swipe right');
        handleNext();
      }
    }
    setStartX(null);
    setEndX(null);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    setDirection('prev');
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    setDirection('next');
  };

  let dotItems = [];
  const numberOfStart = slides.length;
  for (let x = 0; x < numberOfStart; x++) {
    dotItems.push(x);
  }

  useEffect(() => {
    if (sliderItemRef.current === null) return;

    sliderItemRef.current.addEventListener(
      'touchstart',
      (e) => {
        e.preventDefault();
        console.log('touchstart');
        setStartX(e.touches[0].clientX);
      },
      { passive: false },
    );

    sliderItemRef.current.addEventListener('touchend', (e) => {
      e.preventDefault();
      console.log('touchend');

      handleTouchEnd();
    });

    sliderItemRef.current.addEventListener('touchmove', (e) => {
      e.preventDefault();
      console.log('touchmove');
      setEndX(e.touches[0].clientX);
    });
  }, []);

  return (
    <FeatureIlustrationListMobile
      style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
      id={id}
    >
      <motion.div
        key={currentSlide}
        style={{ width: '100%' }}
        initial={
          direction === 'next'
            ? { opacity: 0, x: '100%' }
            : { opacity: 0, x: '-100%' }
        }
        animate={{ opacity: 1, x: 0 }}
        exit={
          direction === 'next'
            ? { opacity: 0, x: '-100%' }
            : { opacity: 0, x: '100%' }
        }
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 0.5,
        }}
      >
        <div
          ref={sliderItemRef}
          style={{ width: '100%', cursor: 'pointer', backgroundColor: 'red' }}
        >
          {slides[currentSlide]}
        </div>
      </motion.div>

      <>
        <SliderControlContainer>
          <SliderControlDots>
            {dotItems.map((item, index) => (
              <SliderControlDot
                key={item + index + 'index'}
                active={item === currentSlide}
              />
            ))}
          </SliderControlDots>
          <SliderControlButtons
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </SliderControlContainer>
      </>
    </FeatureIlustrationListMobile>
  );
};

export default CustomSlider;
