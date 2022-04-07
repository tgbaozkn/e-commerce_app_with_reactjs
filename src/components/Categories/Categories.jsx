import React from 'react'
import {sliderItems} from "../data"
import styled from 'styled-components'
const Categories = () => {
  return (
    <Container>
      {sliderItems.map((item)=> (
        <CategoryItem item = {item.category}/>
      ))}
      
    </Container>
  )
}

export default Categories
const Container = styled.div`
display:flex;
padding: 5px 10px;
`;
const CategoryItem = ({item})=>{
  return (
  <Container>
    {item}
  </Container>
  );

}