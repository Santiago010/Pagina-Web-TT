import React, {Fragment} from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Header from './header.js';
import Menu from './menu.js';
import menuProducts from './menuProducts.js';
import Footer from './footer.js';

function Products(){
    return(
        <Fragment>
            <Header/>
            <Menu/>
            <menuProducts/>
            <Footer/>
        </Fragment>
    );
}
ReactDom.render(<Products/>, document.getElementById('root'));
export default Products;

