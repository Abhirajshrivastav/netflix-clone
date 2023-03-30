import React , {useState , useEffect} from 'react';
import './Nav.css';

const Nav = () => {
  const [show, setshow] = useState(false);

  const transtionNavBar = () => {
    if (window.scrollY > 100 ) {
      setshow(true);
    } else {
      setshow(false);
    }
  }

useEffect(() => {
  window.addEventListener("scroll", transtionNavBar);
  return () => window.removeEventListener('scroll', transtionNavBar
  )
}, [])


  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents">
        <img 
        className='nav__logo'
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netfilx" 
        />
        <img 
        className='nav__avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" 
        />
        </div>
    </div> 
  )
}

export default Nav;