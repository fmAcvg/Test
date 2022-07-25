import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './home.component';
import { DetailsScreen } from './details.component';

const { Navigator, Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeNavigator = () => (
    <Navigator screenOptions={{headerShown: false}}>
        <Screen name='Home' component={HomeScreen}/>
        <Screen name='Details' component={DetailsScreen}/>
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={DetailsScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
);