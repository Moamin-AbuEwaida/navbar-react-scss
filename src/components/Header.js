import React ,{useEffect, useState} from 'react'
import classes from './Header.module.scss'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {Router, useNavigate} from 'react-router-dom'

const Header = () => {

    const [menuOpen, setMenuOpen]=useState(false);
    const navigate = useNavigate();
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    })

    useEffect(()=>{
        const handleResize = ()=>{
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleResize);
        return ()=> window.addEventListener('resize', handleResize);
    },[])

    useEffect(()=>{
        if (size.width > 768 && menuOpen){
            setMenuOpen(false);
        }
    },[size.width, menuOpen])



    const menuToggleHandler = ()=>{
        setMenuOpen((p)=>!p)
    }

    const ctaClicksHandler = ()=>{
        menuToggleHandler();
        navigate("/page-cta");
    }

  return (
    <header className={classes.header}>
        <div className={classes.header__content}>
            <h2 className={classes.header__content__logo}>navbar</h2>
            <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ''}`}>
                <ul>
                    <li>
                        <Router to="/page-one" onClick={menuToggleHandler}>PageOne</Router>
                    </li>
                    <li>
                        <Router to="/page-two" onClick={menuToggleHandler}>PageTwo</Router>
                    </li>
                    <li>
                        <Router to="/page-three" onClick={menuToggleHandler}>PageThree</Router>
                    </li>
                </ul>
                <button onClick={menuToggleHandler}>CTA Page</button>
            </nav>
            <div className={classes.header__content__toggle}>
                {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler} />}
            </div>
        </div>
    </header>
  ) 
}

export default Header