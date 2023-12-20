import { View, Text, StatusBar, ScrollView, TouchableOpacity } from "react-native"
import axios from "axios"
import { useState, useEffect } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { Menu } from "../../../components"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const Order = () => {
    const insets = useSafeAreaInsets()
    const [menu, setMenu] = useState([])
    const [openCart, isOpenCart] = useState(false)
    const [order, setOrder] = useState({
        warung: 'WT1',
        kodemeja: 'A1',
        idmenu: [],
        namamenu: [],
        jumlah: [],
        harga: [],
        subtotal: 0,
        total: 0
    })

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/kasir/menu')

            setMenu(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const orderRecap = (order) => {
        const formData = new FormData();

        formData.append('warung', order.warung);
        formData.append('kodemeja', order.kodemeja);
        formData.append('total', order.total);
        formData.append('metodepembayaran', order.metodepembayaran);
        formData.append('totaldiskon', order.totaldiskon);

        // Handle array properties
        order.idmenu.forEach((id, index) => {
            formData.append(`idmenu[${index}]`, id);
        });

        order.namamenu.forEach((nama, index) => {
            formData.append(`namamenu[${index}]`, nama);
        });

        order.jumlah.forEach((jumlah, index) => {
            formData.append(`jumlah[${index}]`, order.jumlah);
        });

        order.harga.forEach((harga, index) => {
            formData.append(`harga[${index}]`, harga);
        });

        order.subtotal.forEach((subtotal, index) => {
            formData.append(`subtotal[${index}]`, subtotal);
        });

        console.log(order)
        return formData;
        
    }

    useEffect(() => {
        fetchData()
        isOpenCart(true)
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

                {openCart && (
                <View style={{ position: 'absolute', bottom: 55, left: 0, right: 0, backgroundColor: 'white', padding: 10 }}>   
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Cart</Text>
                    <TouchableOpacity
                        onPress={handleViewCart}
                        style={{
                            position: 'absolute',
                            right: 20,
                            backgroundColor: 'blue',
                            padding: 10,
                            borderRadius: 10,
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>View Cart</Text>
                    </TouchableOpacity>
                </View>
            )}
            </LinearGradient>
        </View>
    )
}

export default Order