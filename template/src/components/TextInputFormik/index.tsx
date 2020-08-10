import React from 'react';
import styled from 'styled-components/native';
import { TextInputUIProps } from './types'
import ErrorMessageUI from '../ErrorMessage';

const TextInputFormikUI = (props: TextInputUIProps) => {
    const {
        onSubmitEditing,
        label,
        type,
        setRef,
        isHideKeyboard,
        placeholder,
        value = undefined,
        field: { name },
        labelVisbile,
        keyboardType,
        form: { setFieldValue, errors, setErrors }

    } = props;
    return (
        <Container>
            {labelVisbile && <LableStyled>{label}</LableStyled>}

            <InputStyled
                onFocus={() => { setErrors({}) }}
                secureTextEntry={type === 'password' && true}
                onChangeText={(text) => { setFieldValue(name, keyboardType === 'numeric' ? Number(text) : text); setErrors({}) }}
                editable={!isHideKeyboard && true}
                placeholder={placeholder}
                value={value}
                keyboardType={keyboardType}
                ref={(input) => setRef(input)}
                onSubmitEditing={() => onSubmitEditing()}
            ></InputStyled>
            {errors[name] ? <SepareterLight /> : <Separeter />}
            {errors[name] && <ErrorMessageUI message={errors[name]}></ErrorMessageUI>}
        </Container>
    )
}
export default TextInputFormikUI;

const Container = styled.View`
padding-vertical:10;`;
const LableStyled = styled.Text``;
const InputStyled = styled.TextInput``;
const Separeter = styled.View`
height:1;
border-bottom-width:1;
border-color:#cdcdcd;
width:100%`;
const SepareterLight = styled.View`
height:1;
border-bottom-width:1;
border-color:red;
width:100%`;
