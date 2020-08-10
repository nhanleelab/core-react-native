import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
type Props = {

};

export class SettingStack extends React.Component<Props> {
  render() {
    return (
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} /> */}
      </Stack.Navigator>
    );
  }
}