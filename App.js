import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';
import {Button} from "react-native";
import "./node_modules/test"
import { default as theme } from './theme.json';

export default () => (

    <>
        <IconRegistry icons={EvaIconsPack}/>
        <ApplicationProvider {...eva} theme={eva.light}>
            <AppNavigator/>
        </ApplicationProvider>
    </>
);