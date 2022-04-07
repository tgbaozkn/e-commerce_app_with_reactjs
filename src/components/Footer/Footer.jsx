import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    const text = "Contact us ";
    const [count, setCount] = useState(0);
    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      });
    const detectSize = () => {
        detectHW({
          winWidth: window.innerWidth,
          winHeight: window.innerHeight,
        })
      };
    useEffect(() => {
        
        window.addEventListener('resize', detectSize)
    
        return () => {
          window.removeEventListener('resize', detectSize)
        }
      }, [windowDimenion])
    React.useEffect(() => {
         console.log(count);
         console.log(text.length);
         const timer =
         setInterval(() =>{ 
             setCount(count + 20)
            }, 100);
            if(count > windowDimenion.winWidth-280) {
                setCount(count + 280 - windowDimenion.winWidth);
            }
            
         return () => clearInterval(timer); 
        },[count]);

  return (
    
      <Container >
          <Text left= {count}>
         {text}{'    '}
         </Text>
         <Icons>
         <FacebookIcon  />{'    '}
         <InstagramIcon />{'   '}
         <EmailIcon />
         </Icons>
      </Container>
   
  )
}

const Container = styled.div`
    justify-content: start;
    height: 40px;   
    font-size : 20px;
    background-color: rgba(173,117, 173, 0.5);
    color: white;
    position: relative;
    padding-top : 5px;
    overflow: hidden;
    text-align: start;
    align-items: start; 
    display:flex;
   
`;
const Text = styled.div`
    display:flex;
    align-items: center;
    justify-content:center;
    padding-left: ${(props) => props.left}px;
    padding-top : 5px;
    overflow: hidden;
`;
const Icons = styled.div`
    position: absolute;
    bottom:0.1;
    right:0;
    align-items: center;
    justify-content:center;
    text-align:center;
    padding-top : 5px;
    padding-right: 20px;
`;
