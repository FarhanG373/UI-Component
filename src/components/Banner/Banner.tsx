import React from 'react';
import './Banner.scss';
export type Size = "half" | 'full' | 'oneTherd';
export type Overlay = 'lightOverlay' | 'darkOverlay' | 'darkerOverlay' | 'noOverlay';
export interface Props {
  bannerClass?: string,
  bannerId?: any,
  bannerSize: Size,
  bannerImage: any
  alterText: string,
  children?: any,
  bannerOverlay?: Overlay
}
const Banner = ({
  bannerClass,
  bannerId,
  bannerSize,
  bannerImage,
  alterText,
  children,
  bannerOverlay ='noOverlay'
  
}:Props) => {
  return (
    <div className={`banner ${bannerClass ? bannerClass : '' } ${bannerSize} ${bannerOverlay}`} id={bannerId}>
      {bannerImage ? <img src={bannerImage} alt={alterText} /> : ""}
      <div className="bannerChildren">{children}</div>
    </div>
  )
}

export default Banner;
