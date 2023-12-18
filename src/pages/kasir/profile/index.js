import axios from 'axios'
import { View, Text, Pressable, Image } from 'react-native'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({navigation}) => {
    const [user, setUser] = useState([])


    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/kasir/profile')

            setUser(response.data)
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    
    const logoutHandler = async (req, res) => {
        try {
            const response = await axios.post('http://localhost:9000/api/auth/logout', {idpengguna: await AsyncStorage.getItem('idpengguna')})
            const logout = await AsyncStorage.removeItem('idpengguna')
            
            
            navigation.navigate('Login')
            res.status(200).send(response.data)
        } catch (error) {
            res.send(500).send(error)
            alert('Tidak bisa logout')
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <View style={{flex: 1, flexDirection: 'column', gap: 15, paddingHorizontal: "3%", paddingVertical: "1%"}}>
            <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>Profile</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
                <Image source={require('../../../../assets/foto.jpg')} style={{width: 100, height: 100, borderRadius: 50}} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', gap: 10, marginHorizontal: 10}}>
                <View style={{flexDirection: 'column', justifyContent: 'flex-start', gap: 10}}>
                    <Text style={{fontSize: 15}}>ID Pengguna: </Text>
                    <Text style={{fontSize: 15}}>Nama Pengguna: </Text>
                    <Text style={{fontSize: 15}}>Role: </Text>
                    <Text style={{fontSize: 15}}>Status: </Text>
                </View>
                <View style={{flexDirection: 'column', justifyContent: 'flex-start', gap: 10}}>
                    <Text style={{fontSize: 15}}>{user.idpengguna}</Text>
                    <Text style={{fontSize: 15}}>{user.namapengguna}</Text>
                    <Text style={{fontSize: 15}}>{user.role}</Text>
                    {(user.status === 'Aktif') ? <Text style={{fontSize: 15, color: 'green'}}>{user.status}</Text> : <Text style={{fontSize: 15, color: 'red'}}>{user.status}</Text> }
                    {/* <Text style={{fontSize: 15}}>{user.status}</Text> */}
                </View>
            </View>
            <View style={{marginTop: 10}}>
                <Pressable onPress={logoutHandler}>
                    <Text  style={{fontSize: 15, color: 'red', textAlign: 'center'}}>Logout</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Profile