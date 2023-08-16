// Navbar.js
import { useState ,useEffect} from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Navbar() {
  const[isMenuActive, setActive]=useState(false);
 

  function toggleActive(){
    console.log("clicekd");
    if(isMenuActive){
      setActive(false);
    }
    else{
      setActive(true);
    }
  }

  useEffect(() => {


    document.body.className = isMenuActive ? "scrollOff": '';
  }, [isMenuActive]);
  

  return (
    <nav>
      <div className='navbar'>
      <div onClick={()=>toggleActive()} className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className="brand">
        <Link to="/" className='nav-brand-link'>
          <p>Digitomize</p>
        </Link>
        </div>

        <div className={`nav-link  ${isMenuActive ? 'active' : ''}`}>
          <Link to="/contests" className='link'>
            <li onClick={()=>toggleActive()} className='contents'>Contests</li>
          </Link>
          <Link to="#"className='link' >
            <li onClick={()=>toggleActive()} className='contents'>Contribute</li>
          </Link>
          <Link to="#" className='link'>
            <li  onClick={()=>toggleActive()} className='contents'>Me</li>
          </Link>
        </div>

        <div onClick={()=>toggleActive()} className={`closeMenu ${isMenuActive ? 'active' : ''}`}>close</div>

      </div>
    </nav>
  );
}

export default Navbar;
