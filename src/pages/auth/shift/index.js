import AsyncStorage from '@react-native-async-storage/async-storage'
import { Background } from '../../../components'
import { TouchableOpacity, Text } from 'react-native'
import axios from 'axios'

const Shift = ({navigation}) => {
    const shiftHandler = async () => {
        try {
            const response = await axios.post('http://localhost:9000/api/auth/masuk', {idpengguna: await AsyncStorage.getItem('idpengguna')})
            const shift = await AsyncStorage.setItem('shift', response.data.shift)
            
            console.log(response.data)
            navigation.navigate('Navigation')
        } catch (error) {
            console.log(error)
            alert('Gagal masuk shift')
        }
    }
    return (
        <Background>
            <TouchableOpacity style={{
                backgroundColor: 'green',
                paddingHorizontal: '10%',
                paddingVertical: '3%',
                borderRadius: 5,
            }} 
            onPress={shiftHandler}>
                <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: 'white'}}>Masuk Shift</Text>
            </TouchableOpacity>
        </Background>
    )
}

export default Shift