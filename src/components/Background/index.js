import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'

export default function Background({children}) {
    return (
        <ImageBackground
            style={styles.background}
        >
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding'
            >
                {children}
            </KeyboardAvoidingView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        // backgroundColor: theme.colors.surface,
        backgroundColor: '#162953'
    },
    container: {
        flex: 1,
        padding: 15,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
})