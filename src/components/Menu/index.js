import React from 'react';
import Logo from '../../assents/Logo.png';
import '../Menu/Menu.css';
//import ButtonLink from '../ButtonLink/index'
import Button from '../Button'

function Menu(){
    return (
        <header className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="aluraflixlogo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </header>
    );
}

export default Menu;