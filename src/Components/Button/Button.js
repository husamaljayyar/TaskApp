import React from 'react'
import styled from 'styled-components'

const Container = styled.section` 
width: 100%;
`
const Buttons = styled.button` 
background: yellow;
height: 30px;
width:40%;
margin-left: -4%;
border-radius: 5px;
border: none;


`
   

const Button = ({text, icon}) => {
    return (
        <Container>
            <Buttons>{text}{icon}</Buttons>




        </Container>
    )
}
export default Button