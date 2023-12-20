import { Background } from "../../../components"
import { TextInput, Button, View, TouchableOpacity, StyleSheet, Text } from "react-native"
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from "react"
import Icon from 'react-native-vector-icons/FontAwesome'

const Login = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginHandler = async () => {
        try {
            const response = await axios.post('http://localhost:9000/api/auth/login', {username, password})
            const idpengguna = await AsyncStorage.setItem('idpengguna', response.data.idpengguna)
            const token = await AsyncStorage.setItem('token', response.data.accessToken)

            navigation.navigate('OwnerNavigation')
        } catch (error) {
            alert('Username atau password salah')
        }
    }
    return (
        <Background>
            <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center', color: 'white'}}>Login</Text>
            <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#333" style={styles.icon} />
                <TextInput
                style={styles.input}
                placeholder="Masukkan username"
                onChangeText={setUsername}
                />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="#333" style={styles.icon} />
                <TextInput
                style={styles.input}
                placeholder="Masukkan password"
                onChangeText={setPassword}
                secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={loginHandler}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </Background>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: '10%',
        borderRadius: 5,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: '5%',
    },
    button: {
        backgroundColor: '#3498db',
        paddingHorizontal: '10%',
        paddingVertical: '3%',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default Login