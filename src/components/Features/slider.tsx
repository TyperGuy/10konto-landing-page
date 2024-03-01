import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FeatureIlustrationListMobile,
  SliderControlContainer,
  SliderControlDot,
  SliderControlDots,
} from './styles';
import { SliderControlButtons } from '../Reviews/utils';

const CustomSlider = ({ slides }: { slides: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');

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

  return (
    <FeatureIlustrationListMobile
      style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
    >
      <motion.div
        key={currentSlide}
        style={{width: "100%"}}
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
        {slides[currentSlide]}
      </motion.div>

      <>
        <SliderControlContainer>
          <SliderControlDots>
            {dotItems.map((item) => (
              <SliderControlDot active={item === currentSlide} />
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
