import React, {useState, useEffect, useRef} from 'react'
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
  const modalRef = useRef<any>(null);
  const modalOpen = () => {
    setModal(true);
  }
  const modalClose = () => {
    setModal(false);
    modalRef?.current?.focus();
  }
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setModal(false);
        modalRef?.current?.focus();
      }
    });
   
  },[]);
  return (
    <>
      <button ref={ modalRef } onClick={modalOpen}>{buttonText}</button>
      {
        modal &&
        <div className={`modal ${width}`}>
            <div className='modalContent'>
              <button className='close' onClick={modalClose}>X</button>
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