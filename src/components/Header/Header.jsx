import { useState } from "react";
import "../Header/Header.css"
import logo from "/logo.png"
import { Link } from "react-router-dom";

function Header(){

    const [clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }

    return(
        <header className={"header"}>
            <img className="header-logo" src={logo} />
                <button onClick={handleClick} id="js_menu_button" className={`menu_button ${ clicked ? "on_menu" : ""}`}>
                    <span className="menu_button_line top"></span>
                    <span className="menu_button_line mid"></span>
                    <span className="menu_button_line botm"></span>
                </button>
            <menu className="menu-header">
                <ul className={clicked ? "ul-header on" : "ul-header off"} id='menu'>
                    <li className={clicked && "header-li"}><Link to={'/'} className="nav-link"><button onClick={handleClick}>HOME</button></Link></li>
                    <li className={clicked && "header-li"}><Link to={'/taquilla'} className="nav-link"><button onClick={handleClick}>TAQUILLA</button></Link></li>
                    <li className={clicked && "header-li"}><Link to={'/cartel'} className="nav-link"><button onClick={handleClick}>CARTEL</button></Link></li>
                    <li className={clicked && "header-li"}><Link to={'/camping'} className="nav-link"><button onClick={handleClick}>CAMPING</button></Link></li>
                    <li className={clicked && "header-li"}><Link to={'/historia'} className="nav-link"><button onClick={handleClick}>HISTORIA</button></Link></li>
                </ul>
            </menu>
        </header>
    )
}

export {Header};