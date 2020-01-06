import React from 'react'
import {
    StyleSheet,
    ImageBackground,
    View,
    Text,
} from 'react-native'
import { blueprint } from '../../assets'
import NavigationButton from '../components/NavigationButton'

const SceneSettings = () => (
    <ImageBackground source={blueprint} resizeMode="repeat" style={styles.container}>
        <View>
            <Text>
                Settings Page
            </Text>
            <NavigationButton title="<< Back to home" target="Home" />
        </View>
    </ImageBackground>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
})

export default SceneSettings
