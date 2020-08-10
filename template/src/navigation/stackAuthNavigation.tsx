import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen } from 'screens/AuthScreen';
import { RouteName } from 'constant';
const Stack = createStackNavigator();
type Props = {

};

export class AuthStack extends React.Component<Props> {
    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                <Stack.Screen name={RouteName.LOGIN} component={SignInScreen} />
               
            </Stack.Navigator>
        );
    }
}