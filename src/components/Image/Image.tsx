import React from 'react';
import './Image.scss'
export type radius = 'rounded' | 'circle' | 'sharp';
export type align = 'left' | 'enter' | 'right';

export interface Props {
  ImageClass?: any;
  ImageId?: any;
  ImagePath: any;
  ImageAlt: any;
  ImageRadius: radius;
  ImageAlign?: align;
}

const Image = ({
  ImageClass,
  ImageId,
  ImagePath,
  ImageAlt,
  ImageRadius = 'sharp',
  ImageAlign = 'left'
}:Props) => {
  return (
    <img src={ImagePath} className={`img${ImageClass ? (' ' + ImageClass) : ''}${ImageRadius ?(' ' + ImageRadius) : ''}${ImageAlign ?(' ' + ImageAlign) : ''}`} id={ImageId} alt={ImageAlt}/>
  )
}

export default Image
