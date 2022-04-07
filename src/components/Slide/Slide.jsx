import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from '../data';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 14);
          } else {
            setSlideIndex(slideIndex < 14 ? slideIndex + 1 : 0);
          }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={()=>   handleClick("left")}>
                <ArrowBackIos />
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                    <div style={{
                        height: "100%",
                        width: "250px",
                        backgroundColor : "transparent",

                    }}>

                    </div>
                    {sliderItems.map((item)=>(

                    
                    <Slide key={item.id}>
                <ImgCont>
                    <Image src= {item.url} style = {{height: "calc(100vh/1.8)"}} />
                </ImgCont>
                <Info>
                    <Title> {item.name}</Title>
                    <Desc>{item.description}</Desc>
                    <Buton>{item.price}$</Buton>
                    <Buton style= {{color : "black", backgroundColor:"white ", border: "1px solid gray", padding:"10px",cursor:"pointer"}}>ADD TO CART</Buton>
                </Info>
                </Slide>
                ))}
            </Wrapper>
           
            <Arrow direction="right" onClick={()=> handleClick("right")}>
                <ArrowForwardIos />
            </Arrow>
        </Container>
    );
};

export default Slider;

const Container = styled.div`
    width : 100%;
    height : calc(100vh - 80px);
    display: flex;
    position: relative;
    overflow: hidden;
    margin-top: -25px;
`;
const Arrow = styled.div`
    width : 50px;
    height: 50px;
    background-color: white;
    cursor:pointer;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;
const Wrapper = styled.div`
    height: 100%;
    transition: all 1.5s ease;
    display:flex;
    padding-left: 100px;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
display:flex;
align-items:center;
width : 100vw;  
height: 100vh;
`;
const ImgCont = styled.div`
heigth: 100%;
flex:1;


`;
const Image = styled.img`
    height: 80%;
    margin-right: 20px;

    
`;
const Info = styled.div`
flex:1;
border: 1px solid gray;
padding : 15px;
margin-right:500px;
height : calc(100vh/1.8);
`;
const Title = styled.h1`
font-size: 45px;
`;
const Desc = styled.p`
    margin: 50px 0px;
    font-size : 15px;
    font-weight : 500;
    letter-spacing : 3px;
`;
const Buton = styled.button`
    padding:12px;
    font-size: 20px;
    background-color: rgba(22, 80, 80, 0.712);
    
    color: white;
    font-weight: 200;
    border:0;

`;