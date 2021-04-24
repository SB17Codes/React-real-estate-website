import React, {useState} from 'react'
import ContactForm from '../components/ContactForm';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import GlobalStyle from '../GlobalStyle';



function Contact() {

    const [isOpen , setIsOpen] = useState(false);
    const toggle = () =>{
      setIsOpen(!isOpen);
    }

    return (
        <>
        <GlobalStyle/>
        <Navbar toggle={toggle} navColor={`background-color: #cd853f;`}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact
