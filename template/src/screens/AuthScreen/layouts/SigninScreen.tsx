
import React, { useState, useReducer, useEffect } from 'react';

import { Text, View, TouchableOpacity, TextInput } from 'react-native';


import { connect } from 'react-redux';
import Layout from '../shared';
import { compose } from 'redux';
import { reducer, ActionCreators } from 'screens/AuthScreen/store/Reducer';
import { InitState } from 'screens/AuthScreen/store/InitState';
import { withConnectFormik } from 'hoc/withConnectFormik';
import { ApplicationState } from 'store/configureAction';


const EnhancedLayout = withConnectFormik({

  Component: Layout,
  customSchema: undefined,
  displayName: 'SignUpStepOne',
  onSubmit: () => { },
  initMapProps: {},
  actionKey: 'setRegisterFieldsData'
});
interface UIProps {
  isConnection?: boolean
}

export const SignInScreen = (props: UIProps) => {
  const [state, dispatch] = useReducer(reducer, InitState)
  useEffect(() => {

  }, [])
  return (
    <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
      <Text>aaa{props.isConnection ? 'true' : 'false'}</Text>
      <EnhancedLayout formSchema={state.forms.find(e => e.stage == state.stage)} />
    </View>
  )
}
const mapStateToProps = (state: ApplicationState) => ({
  isConnection: state.ContextState.isConnection



})
const mapDispatchToProps = {

};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(SignInScreen);
