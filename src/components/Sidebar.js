import React from 'react'
import './scss/sidebar.scss'
import { useState , useEffect } from 'react'
import { faBars , faXmark} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Sidebar = () => {
  let menuClass = 'hidden';
  const [isMenuClicked, setisMenuClicked] = useState(false)
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
  const [menuclass, setMenuClass] = useState(menuClass)

  const updateMenu = () => {
    if(!isMenuClicked) {
        setBurgerClass("burger-bar clicked")
        setMenuClass("visible")
    }
    else {
        setBurgerClass("burger-bar unclicked")
        setMenuClass("hidden")
    }
    setisMenuClicked(!isMenuClicked);
 }
 
  return (
    <div id={menuclass} className='main-sidebar text-end p-3 '>
      <button className='border-0 outline-0'
        onClick={updateMenu} >
          {
            menuclass === 'visible' ? <FontAwesomeIcon icon={faXmark} size='xl' id={burger_class} /> :
             <FontAwesomeIcon icon={faBars} size='xl' />  
          }
      </button>
      <div className='links' style={{textAlign:"right"}}>
        <div className='link my-3 fs-4'>Homee</div>
        <div className='link my-3 fs-4'>PieChart</div>
        <div className='link my-3 fs-4'>Diagram</div>
      </div>
    </div>
  )
}

export default Sidebar
