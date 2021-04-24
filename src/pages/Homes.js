import React, {useState}from 'react'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import Navbar from '../components/Navbar'
import { InfoData } from '../data/InfoData'
import GlobalStyle from '../GlobalStyle'

function Homes() {

    const [isOpen , setIsOpen] = useState(false);
    const toggle = () =>{
      setIsOpen(!isOpen);
    }
 return (
        <>
        <GlobalStyle/>
        <Navbar toggle={toggle} navColor={`background-color: #cd853f;`}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <InfoSection {...InfoData}/>
        <Footer/>
        </>
    )
}

export default Homes;
