import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Header from './header.js';
import Menu from './menu.js';
import Footer from './footer.js';

function About(){
    return(
        <Fragment>
            <Header/>
            <Menu/>
            <Footer/>
        </Fragment>
    );
}
ReactDom.render(<About/>, document.getElementById('root'));

export default About;

