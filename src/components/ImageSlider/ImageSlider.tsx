import React, { useEffect, useRef, useState } from "react";
import "./ImageSlider.scss";
export interface Props {
  sliderData?: any;
  Images: Array<any>;
  sliderDots?: boolean;
  sliderNavigation?: boolean;
  sliderDelay?: number;
  arrowLeftText?: any;
  arrowRightText?: any;
  SliderClass?: string;
  SliderId?: string;
  navigationCustomClass?: string;
  dotsCustomClass?: string;
  sliderContentClass?: string;
  sliderImageClass?: string;
}
const ImageSlider = ({
  sliderData,
  Images,
  sliderDots,
  sliderNavigation,
  sliderDelay = 2500,
  arrowLeftText = "Prev",
  arrowRightText = "Next",
  SliderClass,
  SliderId,
  navigationCustomClass,
  dotsCustomClass,
  sliderContentClass,
  sliderImageClass,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const timeOutRef = useRef<any>(null);

  const delay: number = sliderDelay;

  const resetTimeOut = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };

  const handleArrowRight = () => {
    if (activeIndex === sliderData.length - 1) {
      setActiveIndex(0);
    } else setActiveIndex(activeIndex + 1);
  };

  const handleArrowLeft = () => {
    if (activeIndex === 0) return;
    setActiveIndex(activeIndex - 1);
  };

  useEffect(() => {
    resetTimeOut();
    timeOutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex: number) =>
          prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeOut();
    };
  }, [activeIndex]);
  return (
    <div
      className={`slideWrapper${SliderClass ? " " + SliderClass : ""}`}
      id={SliderId}
    >
      <div
        className="slideContainer"
        style={{ transform: `translate3d(${-activeIndex * 100}%, 0, 0)` }}
      >
        {sliderData.map((items: any, index: any) => (
          <div
            key={index}
            className={`slide${activeIndex === index ? " active" : ""}`}
          >
            <div
              className={`sliderImage${
                sliderImageClass ? " " + sliderImageClass : ""
              }`}
            >
              <img src={Images[index]} alt={Images[index]} />
            </div>
            <div
              className={`sliderContent${
                sliderContentClass ? " " + sliderContentClass : ""
              }`}
            >
              {items}
            </div>
          </div>
        ))}
      </div>
      {sliderNavigation && (
        <div
          className={`slideNavigation${
            navigationCustomClass ? " " + navigationCustomClass : ""
          }`}
        >
          <button
            onClick={handleArrowLeft}
            className="leftArrow"
            aria-label="Go to previous slide"
          >
            {arrowLeftText}
          </button>
          <button
            onClick={handleArrowRight}
            className="rightArrow"
            aria-label="Go to Next slide"
          >
            {arrowRightText}
          </button>
        </div>
      )}

      {sliderDots && (
        <div
          className={`slideDotsContainer${
            dotsCustomClass ? " " + dotsCustomClass : ""
          }`}
        >
          {sliderData.map((_: any, index: any) => (
            <button
              key={index}
              className={`slideDots ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`go to Slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : "false"}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
