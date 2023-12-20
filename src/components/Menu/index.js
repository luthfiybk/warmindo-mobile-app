import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {SimpleStepper} from 'react-native-simple-stepper'

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
        <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
            <Image
                style={styles.image}
                source={require('../../../assets/foto.jpg')}
            />
        </View>
        <View style={styles.detailsWrapper}>
            <View style={styles.textContainer}>
                {children}  
            </View>
            <View style={styles.counterContainer}>
                <SimpleStepper
                    
                />
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        paddingBottom: 5,
        borderColor: 'grey',
        marginHorizontal: 5
    },
    imageWrapper: {
        marginRight: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    detailsWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        alignSelf: 'flex-end'
    },
    counterButton: {
        backgroundColor: 'orange',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingBottom: 3
    },
    counterButtonText: {
        fontSize: 20,
        color: 'white',
    },
    counterText: {
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Menu