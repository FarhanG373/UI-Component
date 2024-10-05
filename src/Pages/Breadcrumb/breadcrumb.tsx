import React from 'react';
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const breadcrumb = () => {
  const data = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
    { label: 'Product Details', link: '/products/123' },
  ]
  return (
    <>
      <h3>By URL</h3>
      <BreadCrumb seprator='>'></BreadCrumb>
      <h3>By Custom data</h3>
      <BreadCrumb custom data={data}></BreadCrumb>
    </>
  )
}

export default breadcrumb