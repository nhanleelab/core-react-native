import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from 'screens/DashboardScreen';


const Stack = createStackNavigator();
type Props = {

};

export class HomeStack extends React.Component<Props> {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DashboardScreen} />
       
      </Stack.Navigator>
    );
  }
}