import React, {useState} from 'react'
import './Modal.scss';
export type width = 'small' | 'medium' | 'large';
export interface Props {
  children?: any;
  buttonText?: any;
  toggle?: any;
  width?: width;
  headerText?: any;
}
const Modal = ({
  children,
  buttonText='Open Modal',
  toggle,
  width = 'medium',
  headerText
}: Props) => {
  const [modal, setModal] = useState(false);
  toggle = () => setModal(!modal)
  return (
    <>
      <button onClick={toggle}>{buttonText}</button>
      {
        modal &&
        <div className={`modal ${width}`}>
            <div className='modalContent'>
              <button className='close' onClick={toggle}>X</button>
              {
                headerText && <div className='modelHeader'>{headerText}</div>
              }
              <div className='modalBody'>{ children }</div>
            </div>
        </div>
      }
    </>
    
  )
}

export default Modal