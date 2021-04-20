import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    useFonts,
    Jost_400Regular,
    Jost_600SemiBold
} from '@expo-google-fonts/jost';

import Welcome from './src/pages/Welcome';
import LoadingScreen from './src/utils/LoadingScreen';

export default function App() {
    const [ fontsLoaded ] = useFonts({
        Jost_400Regular,
        Jost_600SemiBold
    });

    if ( !fontsLoaded ) 
        return <LoadingScreen />;

    return (
        <>
            <StatusBar style="auto" />
            <Welcome />
        </>
    );
}
