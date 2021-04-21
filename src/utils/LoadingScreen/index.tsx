import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const LoadingScreen: React.FC = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <LottieView 
                source={require('../../assets/load.json')}
                resizeMode="contain"
                style={ styles.animation }
                autoPlay 
                loop />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    animation: {
        height: Dimensions.get('window').width * .7
    }
});

export default LoadingScreen;