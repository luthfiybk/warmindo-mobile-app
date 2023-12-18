import { View, Text, StatusBar, Pressable, ScrollView, FlatList } from "react-native"
import { Card } from "../../../components"
import { LinearGradient } from "expo-linear-gradient"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from "react-native-vector-icons/Ionicons"
import React, { useEffect, useState } from "react"
import axios from "axios"

const Transaksi = ({navigation}) => {
    const insets = useSafeAreaInsets()
    const [transaksi, setTransaksi] = useState([])

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:9000/api/kasir/transaksi')

            console.log(result.data)
            setTransaksi(result.data)
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
                        Daftar Transaksi
                    </Text>
                </View>

                {/* </View> */}
                <ScrollView style={{ flex: 1, backgroundColor: "#fff", marginTop: hp("1%")}}>
                    {transaksi.map((item, index) => {
                        return (
                            <>
                                <Card>
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: 20, color: "black" }}>{item.idtransaksi}</Text>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <View style={{flexDirection: "column", gap: 5, alignItems: "flex-start"}}>
                                            <Text>Jam</Text>
                                            <Text>Status</Text>
                                            <Text>Total</Text>
                                        </View>
                                        <View style={{flexDirection: "column", gap: 5, alignItems: "flex-start"}}>
                                            <Text>{item.waktu}</Text>
                                            <Text>{item.status}</Text>
                                            <Text>Rp{item.total}</Text>
                                        </View>
                                        <View style={{flexDirection: "column", gap: 3, alignItems: "center", marginTop: 10}}>
                                            <Pressable onPress={() => navigation.navigate('DetailTransaksi', {idtransaksi: item.idtransaksi})}>
                                                <Icon size={20}  name="chevron-forward-sharp"/>
                                            </Pressable>
                                        </View>
                                    </View>
                                </Card>
                            </>
                        )
                    })}
                </ScrollView>
            </LinearGradient>
        </View>
    )
}

export default Transaksi