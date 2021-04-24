import React, {useState}from 'react'
import Dropdown from '../components/Dropdown'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import InteriorSection from '../components/InteriorSection'
import ListingsSection from '../components/ListingsSection'
import { InfoData, InfoData2, InfoData3, InfoData4 } from '../data/InfoData';
import Navbar from '../components/Navbar'
import GlobalStyle from '../GlobalStyle'
import Footer from '../components/Footer'
import { SliderData } from '../data/SliderData'
import ScrollToTop from '../components/ScrollToTop'

function Main() {

    const [isOpen , setIsOpen] = useState(false);
    const toggle = () =>{
      setIsOpen(!isOpen);

    }
    return (
        <>

    <GlobalStyle/>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Hero slides = {SliderData}/>
    <InfoSection {...InfoData}/>
    <ListingsSection {...InfoData2}/>
    <InteriorSection {...InfoData3}/>
    <InfoSection {...InfoData4}/>
    <ScrollToTop />
    <Footer/>         
        </>
    )
}

export default Main;
