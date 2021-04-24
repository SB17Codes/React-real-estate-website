import React from 'react'
import styled from "styled-components/macro"
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import {Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'


const DropdownContainer = styled.div`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #cd853f;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: all 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
top: ${({isOpen}) => (isOpen ? 0 : '-100%')};



`

const Icon = styled.div`
position:absolute;
top: 1.2rem;
right: 1.5rem;
background:transparent;
font-size: 2rem;
cursor:pointer;
outline:none;`
const CloseIcon = styled(FaTimes)`
color: #000d1a;
`
const DropdownWrapper = styled.div`

`
const DropdownMenu = styled.div`
display:grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align:center;
margin-bottom: 4rem;


@media screen and (max-width:480px;){

grid-template-rows: repeat(4, 60px);

}
`
const DropdownLink = styled(Link)`
display:flex;
width:100px;
margin:0 auto;
justify-content: center;
font-size:1.5rem;
text-decoration:none;
cursor: pointer;
transition: 0.3s; ease-in-out;
list-style:none;
color: #fff;
;


&:hover{
    color: #000d1a
}`
const BtnWrap = styled.div`
display:flex;
justify-content: center;`



function Dropdown({isOpen, toggle}) {
    return (
        <DropdownContainer isOpen={isOpen}> 
        <Icon to="/" onClick={toggle}>
            <CloseIcon />
        </Icon> 
        <DropdownWrapper>
        <DropdownMenu>
            {menuData.map((item,index) => {
               return ( <DropdownLink to={item.link} key={index}>
                    {item.title}
                </DropdownLink>)
            }) }

            <BtnWrap>
                <Button css={`height: 50px;
                    margin-top: 30px; `} primary="true"  round="true" big="true" to="/contact">
                Contact Us
                </Button>
            </BtnWrap>
        </DropdownMenu>
        </DropdownWrapper>
        
        </DropdownContainer>
    )
}

export default Dropdown;
