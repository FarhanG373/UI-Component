import React from 'react'
import Button from '../../components/Button/Button'

const ButtonPage = () => {
  return (
    <div>
              <Button children={`Button without link`} ></Button>
              <Button children={`Button with link`} link={`www.google.com`} ></Button>
      
    </div>
  )
}

export default ButtonPage