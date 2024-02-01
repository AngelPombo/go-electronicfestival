import { useState } from "react";
import "../Header/Header.css"
import logo from "/logo.jpeg"

function Header(){

    const [clicked, setClicked] = useState(false)

    function handleClick(){
        setClicked(!clicked)
        
    }

    return(
        <header className="header">
            <img className="header-logo" src={logo} />
            <button onClick={handleClick} id="js_menu_button" className={`menu_button ${ clicked ? "on_menu" : ""}`}>
                <span class="menu_button_line top"></span>
                <span class="menu_button_line mid"></span>
                <span class="menu_button_line botm"></span>
            </button>
        </header>
    )
}

export {Header};