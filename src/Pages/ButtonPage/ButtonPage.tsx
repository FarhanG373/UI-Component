import React from 'react'
import Button from '../../components/Button/Button'
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const ButtonPage = () => {
  return (
    <div>
      <BreadCrumb />
              <Button children={`Button without link`} ></Button>
              <Button children={`Button with link`} link={`www.google.com`} ></Button>
      
    </div>
  )
}

export default ButtonPage