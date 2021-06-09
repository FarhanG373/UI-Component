import React from 'react';
import './Image.scss'
export type radius = 'rounded' | 'circle' | 'sharp';


export interface Props {
  ImageClass?: any;
  ImageId?: any;
  ImagePath: any;
  ImageAlt: any;
  ImageRadius: radius;
}

const Image = ({
  ImageClass,
  ImageId,
  ImagePath,
  ImageAlt,
  ImageRadius = 'sharp'
  
}:Props) => {
  return (
    <img src={ImagePath} className={ImageClass + ImageRadius} id={ImageId} alt={ImageAlt}/>
  )
}

export default Image
