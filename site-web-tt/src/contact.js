import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Header from './header.js';
import Menu from './menu.js';
import Footer from './footer.js';


function Contact(){
    return(
        <Fragment>
            <Header/>
            <Menu/>
            <Footer/>
        </Fragment>
    );
}
ReactDom.render(<Contact/>, document.getElementById('root'));
export default Contact;