import { View, Text, StatusBar, ScrollView } from "react-native"
import axios from "axios"
import { useState, useEffect } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { Menu } from "../../../components"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const Order = () => {
    const insets = useSafeAreaInsets()
    const [menu, setMenu] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/kasir/menu')

            setMenu(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <View style={{flex: 1, backgroundColor: "#fff", paddingBottom: insets.bottom, paddingRight: insets.right, paddingLeft: insets.left}}>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
            <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 1]} colors={["#162953", "#162953"]} style={{ flex: 1, flexDirection: "column" }}>
                {/* <View style={{ flexDirection: "column", paddingHorizontal: "1%", alignItems: 'center'}}> */}
                <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 0 }}>
                    <Text style={{ fontSize: 20, color: "#fff", fontWeight: 'bold' }}>
                        Order
                    </Text>
                </View>

                {/* </View> */}
                <ScrollView style={{ flex: 1, backgroundColor: "#fff", marginTop: hp("1%")}}>
                    {menu.map(data => (
                        <Menu>
                            <Text>{data.namamenu}</Text>
                            <Text>{data.harga}</Text>
                        </Menu>
                    ))}
                </ScrollView>
            </LinearGradient>
        </View>
    )
}

export default Order