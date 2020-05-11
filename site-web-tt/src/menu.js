import React from 'react';

function Menu() {
    return(
    <nav className="menu">
        <a  id="Contact" href="./App.js">Inicio</a>
        <a href="./Products.js">Productos</a>
        <a href="./about.js">Acerca de</a>
        <a href="./contact.js">Contacto</a>
    </nav>
    );
}

export default Menu;