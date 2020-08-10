import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeStack } from 'navigation/stackHomeNavigation';
import SettingScreen from 'screens/SettingScreen';

const Tab = createBottomTabNavigator();
type Props = {};
export class TabContainer extends Component<Props> {
    render() {

        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStack} />

                <Tab.Screen name="Settings" component={SettingScreen} />
            </Tab.Navigator>
        );
    }
}