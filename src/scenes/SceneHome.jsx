import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    StyleSheet,
    ImageBackground,
} from 'react-native'
import { blueprint } from '../../assets'
import NavigationButton from '../components/NavigationButton'
import Panel from '../components/Panel'

const SceneHome = (props) => {
    const {
        applicationState: { version, name },
    } = props

    return (
        <ImageBackground source={blueprint} resizeMode="repeat" style={styles.container}>

            <Panel title={`${name} (v${version})`}>
                <NavigationButton
                    title="go to Settings >>"
                    target="Settings"
                />
            </Panel>

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
