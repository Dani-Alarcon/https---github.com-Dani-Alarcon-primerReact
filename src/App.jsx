import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
//import './App.css'
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Section />
        <Footer />
      </div>
    )
  }
}
export default App
