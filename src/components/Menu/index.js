import { View, Text, Image, Pressable } from 'react-native'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
const Menu = ({children}) => {
    const [menu, setMenu] = useState([])
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        if(counter !== 0) {
            setCounter(counter - 1)
        }
    }

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/kasir/menu')

            setMenu(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <View style={{marginHorizontal: 10, marginTop: 5}}>
            <View style={{flexDirection: 'column', justifyContent: 'flex-start', gap: 5}}>
                    <View key={menu.idmenu} style={{flexDirection: 'row', gap: 5, borderBottomWidth: 1, paddingBottom: 5, borderColor: 'grey', justifyContent: 'space-between', alignContent: 'flex-start'}}>
                        <Image source={require('../../../assets/foto.jpg')} style={{width: 100, height: 100}} />
                        <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignSelf: 'center'}}>
                            {children}
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', alignContent: 'flex-end', gap: 5}}>
                            <Pressable style={{paddingHorizontal: '5%', paddingVertical: '1%', backgroundColor: 'orange', borderRadius: 5}} onPress={decrement}>
                                <Text style={{color: 'white'}}>-</Text>
                            </Pressable>
                            <Text>{counter}</Text>
                            <Pressable style={{paddingHorizontal: '5%', paddingVertical: '1%', backgroundColor: 'orange', borderRadius: 5}} onPress={increment}>
                                <Text style={{color: 'white'}}>+</Text>
                            </Pressable>
                        </View>
                    </View>
                {/* <Image source={require('../../../assets/foto.jpg')} style={{width: 100, height: 100}} />
                <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
                    <Text>{menu.namamenu}</Text>
                    <Text>{menu.harga}</Text>
                </View> */}
            </View>
        </View>
    )
}

export default Menu