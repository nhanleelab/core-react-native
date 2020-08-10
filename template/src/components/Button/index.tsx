import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { ButtonUIProps } from './type';

const Button = (props: ButtonUIProps) => {
    const { children, onPress, uistyle } = props;
    return (
        <Container style={uistyle} onPress={() => { onPress(); }}>
            {children}
        </Container>
    )
}
export default Button;
const Container = styled.TouchableOpacity`
border-width:1;
border-color:red;
align-items:center;
border-radius:5;
height:40;
justify-content:center;
`;