import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    useFonts,
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold
} from '@expo-google-fonts/jost';

import LoadingScreen from './src/utils/LoadingScreen';
import Routes from './src/routes';

export default function App() {
    const [ fontsLoaded ] = useFonts({
        Jost_300Light,
        Jost_400Regular,
        Jost_500Medium,
        Jost_600SemiBold
    });

    if ( !fontsLoaded ) 
        return <LoadingScreen />;

    return (
        <>
            <StatusBar style="auto" />
            <Routes />
        </>
    );
}
