import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
type UIProps = {
    image: any,
    text?: string,
    hasText?: boolean,
    navigation: any,
    style?: any
}
const SplashScreen = (props: UIProps) => {
    const { style } = props;
    return (

        <Container style={style}>

        </Container>
    )
}
export default SplashScreen;
const Container = styled.View`
flex:1;
background-color:red;
`;