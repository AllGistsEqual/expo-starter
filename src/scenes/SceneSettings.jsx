import React from 'react'
import {
    StyleSheet,
    ImageBackground,
    Text,
} from 'react-native'
import { blueprint } from '../../assets'
import NavigationButton from '../components/NavigationButton'
import Panel from '../components/Panel'

const SceneSettings = () => (
    <ImageBackground source={blueprint} resizeMode="repeat" style={styles.container}>

        <Panel title="Settings Page">
            <Text>
                Lorem Ipsum
            </Text>
            <NavigationButton title="<< Back to home" target="Home" />
        </Panel>

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
