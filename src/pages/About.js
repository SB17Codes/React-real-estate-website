import React, {useState}from 'react'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'
import InteriorSection from '../components/InteriorSection'
import Navbar from '../components/Navbar'
import { InfoData3 } from '../data/InfoData'
import GlobalStyle from '../GlobalStyle'

function About() {

    const [isOpen , setIsOpen] = useState(false);
    const toggle = () =>{
      setIsOpen(!isOpen);
    }
 return (
        <>
        <GlobalStyle/>
        <Navbar toggle={toggle} navColor={`background-color: #cd853f;`}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <InteriorSection {...InfoData3}/>
        <Footer/>
        </>
    )
}

export default About;