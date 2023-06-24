import React,{useState} from 'react';
import './Dropdown.scss';
export interface Props {
  fieldClass?: any,
  fieldId?: any;
  children: any;
  filedFocus?: any;
  fieldBlur?: any;
  fieldClick?: any;
  dropdownClass?: any;
  dropdownBtnName: any;
}

const Dropdown = ({
  children,
  fieldId,
  fieldClass,
  filedFocus,
  fieldBlur,
  dropdownClass,
  dropdownBtnName
}: Props) => {
  const [fClick, setFclick] = useState(false);
  return (
    <div className='drop_down'>
      <button className={`dropdownBtn ${fieldClass} ${fClick ? 'dropOpen' : 'dropClose'}`} id={fieldId} onBlur={fieldBlur} onFocus={filedFocus} onClick={()=>setFclick(!fClick)}>{ dropdownBtnName}</button>
      {
        fClick && 
        <div className={`drop_container ${dropdownClass ? dropdownClass : ''}`}>
        {children}
      </div>
      }
      
    </div>
  )
}

export default Dropdown