import React from 'react'
import Banner from '../../components/Banner/Banner';
const BannerPage = () => {
  return (
    <Banner
          bannerImage="https://images.pexels.com/photos/3794748/pexels-photo-3794748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          bannerSize="full"
      bannerOverlay="lightOverlay"
      alterText='lightOverlay'
        />
  )
}

export default BannerPage