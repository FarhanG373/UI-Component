import React from 'react'
import Modal from '../../components/Modal/Modal'
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const ModalPage = () => {
  return (
    <div><BreadCrumb/><Modal buttonText={ `Open Modal`} children={`this is modal`}/></div>
  )
}

export default ModalPage