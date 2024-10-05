import React from 'react'
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
import ProgressBar from '../../components/ProgressBar/ProgressBar'
const Progress = () => {
  return (
    <>
      <BreadCrumb/>
    <ProgressBar color="FireBrick" progress={85} showProgress/>
      <ProgressBar showProgress color='Bisque' progressType='circular' circleBackgroundColor="Coral" progresBackgroundColor='Aquamarine' progresForgroundColor='Black' progress={75} />
    </>
  )
}

export default Progress