import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { React, useState, useCallback } from 'react';
import { ApiSlides } from './../apifolder/SliderApi';

import './Slider.css';

function Slider() {
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  // slide function 통합
  const handleSlide = useCallback(
    (direction) => {
      if (direction === 'left') {
        activeSlide === slides.length - 1
          ? setActiveSlide(0)
          : setActiveSlide(activeSlide + 1);
      } else {
        activeSlide === 0
          ? setActiveSlide(slides.length - 1)
          : setActiveSlide(activeSlide - 1);
      }
    },
    [activeSlide, slides.length]
  );

  const arrowDivStyle =
    'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer';

  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between mobile:hidden">
      <div className={arrowDivStyle}>
        <ArrowLeftOutlined
          style={{ fontSize: '50px' }}
          onClick={() => handleSlide('left')}
        />
      </div>
      {slides.map((slide, index) => {
        if (index === activeSlide) {
          return (
            <div
              key={index}
              className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative ${slide.background}`}
            >
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img
                    className="h-[100%] object-cover"
                    src={slide.src}
                    alt="slide_img"
                  />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center -ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Show Now</button>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className={arrowDivStyle}>
        <ArrowRightOutlined
          style={{ fontSize: '50px' }}
          onClick={() => handleSlide('right')}
        />
      </div>
    </div>
  );
}

export default Slider;
