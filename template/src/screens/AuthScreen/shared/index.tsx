import React, { Component } from 'react';
import { FormStage } from 'screens/AuthScreen/model';

import { Field } from 'formik';
import styled from 'styled-components/native';


import TextInputFormikUI from 'components/TextInputFormik';
import { getString } from 'locales';
import { RouteName } from 'constant';
import Button from 'components/Button';
import { View } from 'react-native';

interface LayoutProps {
    values?: any,
    errors?: any,
    handleSubmit?: any,
    formSchema?: FormStage
}
const Layout = (props: LayoutProps) => {

    const DisplayForm = () => {

        if (props.formSchema) {
            return (props.formSchema.rows.map((r, i) => (
                <View>
                    {
                        r.controls.map((c, ci) => {
                            return (
                                <Field

                                    key={ci}
                                    type={c.type}
                                    keyboardType={c.keyboardType}
                                    name={c.fieldName}
                                    placeholder={c.placeholder}
                                    component={TextInputFormikUI}
                                    label={c.label}
                                    setRef={(input: any) => {
                                        // this.state.inputs[key] = input
                                    }}
                                    onSubmitEditing={() => {

                                    }}
                                />

                            )
                        })
                    }
                </View>
            ))

            )
        }



    }
    return (
        <WrapperKeyboard>
            <Container>
                {DisplayForm()}
            </Container>
        </WrapperKeyboard>
    )
}
export default Layout;
const WrapperKeyboard = styled.TouchableWithoutFeedback``;
const Container = styled.View``;