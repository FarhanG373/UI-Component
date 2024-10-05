import React from 'react'
import ImageSliders from '../../components/ImageSlider/ImageSlider'
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const ImageSlider = () => {
  const colors = [
    {
      image:
        "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg",
      name: "NeilPatel",
      id: 1,
      className: "111",
    },
    {
      image:
        "https://images.pexels.com/photos/28219391/pexels-photo-28219391/free-photo-of-the-dolomites-in-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "NeilPatel2",
      id: 2,
      className: "111",
    },
    {
      image:
        "https://neilpatel.com/wp-content/uploads/2017/09/image-editing-tools.jpg",
      name: "NeilPatel",
      id: 1,
      className: "111",
    },
    {
      image:
        "https://images.pexels.com/photos/28219391/pexels-photo-28219391/free-photo-of-the-dolomites-in-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "NeilPatel2",
      id: 2,
      className: "111",
    },
  ];
  return (
    <><BreadCrumb /><ImageSliders
      Images={colors.map((i) => i.image)}
      sliderData={colors.map((i) => i.name)}
      sliderNavigation
      sliderDots
      navigationCustomClass="naviclass" /></>
  )
}

export default ImageSlider