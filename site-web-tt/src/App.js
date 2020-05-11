import React, {Fragment} from 'react';
import './App.css';
import Header from './header.js';
import Menu from './menu.js';
import Banner from './banner.js';
import Footer from './footer.js';



function App() {
  return (
  <Fragment>
      <Header/> 
      <Menu/>
      <Banner/>
      <Footer/>
  </Fragment>
  );
}

export default App;

