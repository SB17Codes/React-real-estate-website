import React, {useState}from 'react'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import { SliderData2 } from '../data/SliderData'
import GlobalStyle from '../GlobalStyle'


function Rentals() {

    const [isOpen , setIsOpen] = useState(false);
    const toggle = () =>{
      setIsOpen(!isOpen);

    }
 return (
        <>
        <GlobalStyle/>
        <Navbar toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Hero slides={SliderData2}/>
        <Footer/>
        </>
    )
}

export default Rentals;