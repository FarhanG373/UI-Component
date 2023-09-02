import './NavBar.scss';
import {useState} from 'react'
import { Link } from "react-router-dom";
export type NavColor = 'light' | 'dark' | 'transparent';
export type position = 'fixed' | 'scroler';
export interface Props {
  navBarColor?: NavColor,
  navBarClass?: string,
  navBarId?: string,
  isOpen?: boolean,
  NavMobileOpen?: any,
  NavMobileClose?:any,
  Logo?: any
  navPosition?: position,
  children?: any;
}


const NavBar = ({
  navBarColor = "dark",
  navBarClass,
  navBarId,
  NavMobileOpen = 'open',
  NavMobileClose = 'close',
  Logo,
  navPosition = 'scroler',
  children
}: Props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={`NavBar ${isOpen ? 'active': null} ${navBarColor} ${navBarClass ? navBarClass : ''} ${navPosition}`} id={navBarId}>
      <div className="logo"><Link to="/"><img src={Logo} alt="" /></Link></div>
      <div className="link_section">
        <label htmlFor="navCheck" className="NavLabel" onClick={()=>{setOpen(!isOpen)}}><span className="MobileNav">{NavMobileOpen}</span><span className="MobileNavClose">{NavMobileClose}</span></label>
        <div className="main_links">
          {children}
        </div>
      </div>
    </div>
)
}
export default NavBar;