import React, {useState} from 'react'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';


function Navbar() {
  return (
      <>
      <Container></Container>
      </>
      
  )
}
export {Navbar};


const Container = ()=> {
    return (<div className='container'>
        <Wrapper/>
    </div>);
}
const Wrapper = ()=> {
    return (<div className='wrapper'>
             <Left text={"Left"}/>
            <Center text={"SHOPPING."} />
            <Right text={"Right"} />
    </div>);
    
}
function Left({text}) {
    const sbutton = <FontAwesomeIcon icon={faSearch} />;
    return (
    <div className='left'> 
    
    <Language></Language>
    <div className="searchcontainer">
           
            <input></input> {sbutton}
    </div>
   
    
         
    </div>);
    
}
const Center = ({text})=> {
    return (<div className='center'>
        <h2>
            {text}
        </h2>
       
    </div>);
    
}
const Right = ({text})=> {
    const [display, setCount] = useState("none");
    
    return (<div className='right'>
        <MenuItem onClick={() => setCount(display==="none"? "block":"none")} >REGISTER </MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color= "primary">
            <ShoppingCart></ShoppingCart>
          </Badge>
        </MenuItem>
    </div>);
    
}
const Language = ()=> {
    return <span className='language'>
            EN &nbsp;

    </span>
}
const MenuItem = styled.div`
    font-size : 14px;
    cursor : pointer;
    margin-left: 25px;
    padding-right: 20px;
`;