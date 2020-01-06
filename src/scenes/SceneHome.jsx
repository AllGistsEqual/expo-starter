import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    StyleSheet,
    ImageBackground,
    View,
    Text,
} from 'react-native'
import { blueprint } from '../../assets'
import NavigationButton from '../components/NavigationButton'

const SceneHome = (props) => {
    const {
        applicationState: { version, name },
    } = props

    return (
        <ImageBackground source={blueprint} resizeMode="repeat" style={styles.container}>
            <View>
                <Text>
                    {`${name} (v${version})`}
                </Text>
                <NavigationButton
                    title="go to Settings >>"
                    target="Settings"
                />
            </View>
        </ImageBackground>
    )
}

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

SceneHome.propTypes = {
    applicationState: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    applicationState: state.application,
})

export default connect(
    mapStateToProps,
)(SceneHome)
