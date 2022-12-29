import React, { useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames';

import { ReactComponent as ShevronIcon } from '../../assets/icons/slider-shevron-left.svg';
import styles from './MobileSlider.module.scss';
import MobileSliderCard from './MobileSliderCard/MobileSliderCard';
import { slidesData } from './mock';

const MobileSlider = ({ handlePopupClose }) => {
  const buttonPrevRef = useRef(null);
  const buttonNextRef = useRef(null);

  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={3}
        slidesPerView={1}
        onInit={(swiper) => {}}
        onSlideChange={(swiper) => {
          if (swiper.current === slidesData.length) {
            handlePopupClose();
          }
        }}
        navigation={{
          prevEl: '.navigationButton--prev',
          nextEl: '.navigationButton--next',
        }}
        loop
        loopedSlides={1}
        pagination
        className={styles.slider}
      >
        {slidesData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <MobileSliderCard {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={styles.buttonsContainer}>
        <button
          className={cn(
            styles.button,
            styles.buttonPrev,
            'navigationButton--prev'
          )}
          ref={buttonPrevRef}
        >
          <ShevronIcon />
        </button>
        <button
          className={cn(
            styles.button,
            styles.buttonNext,
            'navigationButton--next'
          )}
          ref={buttonNextRef}
        >
          <ShevronIcon />
        </button>
      </div>
    </div>
  );
};

export default MobileSlider;
