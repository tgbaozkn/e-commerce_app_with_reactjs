import React from 'react'
import styled from 'styled-components'
const   Register = ({display}) => {
  return (
    <Display display = {display}>
    <Container  >
        <Wrapper>
            <Title> CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder='name'/>
                <Input placeholder='username'/>
                <Input placeholder='e-mail'/>
                <Input placeholder='password'/>
                <Input placeholder='password again'/>
                <Input placeholder='name'/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Buton>Create Profile</Buton>
            </Form>
        </Wrapper>
      
    </Container>
    </Display>
  )
}

export default Register
const Display = styled.div`
  display : ${props=> props.display};
`;
const Container = styled.div`
 

  overflow: hidden;
  height: calc(100vh-60px);

  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Buton = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
