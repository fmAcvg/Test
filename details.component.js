import React from 'react';
import {ImageBackground, SafeAreaView, View} from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
const name = "AbbeApp"
const image = { uri: "https://reactjs.org/logo-og.png" };
export const DetailsScreen = ({ navigation }) => {


    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('./assets/bg.jpg')}
                resizeMode={'cover'}
                style={{ flex: 1, width: '100%' }}>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>DETAILS</Text>
            </Layout>
            </ImageBackground>
        </View>
    );
};

