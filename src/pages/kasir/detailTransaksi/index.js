import { useEffect, useState } from "react"
import { Card } from "../../../components"
import { Text, View, StatusBar } from "react-native"
import axios from 'axios'
import { LinearGradient } from "expo-linear-gradient"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"  

const DetailTransaksi = ({ navigation, route }) => {
    const { idtransaksi } = route.params

    const [detailTransaksi, setDetailTransaksi] = useState([])

    const fetchData = async () => {
        try {
            const result = await axios.get(`http://localhost:9000/api/kasir/transaksi/${idtransaksi}`)

            console.log(result.data)
            setDetailTransaksi(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const totalSubtotal = detailTransaksi.subtotal?.reduce((a, b) => a + b, 0)

    console.log(detailTransaksi)
    const insets = useSafeAreaInsets()
    return (
            <View style={{flex: 1, backgroundColor: "#fff", paddingBottom: insets.bottom, paddingRight: insets.right, paddingLeft: insets.left}}>
                <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
                <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 1]} colors={["#162953", "#162953"]} style={{ flex: 1, flexDirection: "column" }}>
                    {/* <View style={{ flexDirection: "column", paddingHorizontal: "1%", alignItems: 'center'}}> */}
                    <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 0 }}>
                        <Text style={{ fontSize: 20, color: "#fff", fontWeight: 'bold' }}>
                            Detail Transaksi
                        </Text>
                    </View>

                    {/* </View> */}
                    <View style={{ flex: 1, backgroundColor: "#fff", marginTop: hp("1%")}}>
                        <View style={{marginHorizontal: 10, marginVertical: 10, gap: 10}}>
                            <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                                <Text style={{fontSize: 15}}>ID Transaksi: </Text>
                                <Text style={{fontSize: 15}}>{idtransaksi}</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 15}}>Tanggal: </Text>
                                    <Text style={{fontSize: 15}}>{detailTransaksi.tanggal}</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 15}}>Waktu: </Text>
                                    <Text style={{fontSize: 15}}>{detailTransaksi.waktu}</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 15}}>Status Pesanan: </Text>
                                    <Text style={{fontSize: 15}}>{detailTransaksi.status}</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 15}}>Status Transaksi: </Text>
                                    <Text style={{fontSize: 15}}>{detailTransaksi.transaksi_status}</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 2, paddingBottom: "2%"}}>
                                <View style={{flexDirection: 'column', alignItems: 'center', gap: 5}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15}}>Nama Menu</Text>
                                    {detailTransaksi.namamenu?.map((item) => {
                                        return (
                                            <Text style={{fontSize: 15}}>{item}</Text>
                                        )
                                    })}
                                </View>
                                <View style={{flexDirection: 'column', alignItems: 'center', gap: 5}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15}}>Jumlah</Text>
                                    {detailTransaksi.jumlah?.map((item) => {
                                        return (
                                            <Text style={{fontSize: 15}}>{item}</Text>
                                        )
                                    })}
                                </View>
                                <View style={{flexDirection: 'column', alignItems: 'center', gap: 5}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15}}>Harga</Text>
                                    {detailTransaksi.harga?.map((item) => {
                                        return (
                                            <Text style={{fontSize: 15}}>Rp{item}</Text>
                                        )
                                    })}
                                </View>
                                <View style={{flexDirection: 'column', alignItems: 'center', gap: 5}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 15}}>Subtotal</Text>
                                    {detailTransaksi.subtotal?.map((item) => {
                                        return (
                                            <Text style={{fontSize: 15}}>Rp{item}</Text>
                                        )
                                    })}
                                </View>
                            </View>
                            <Text style={{fontWeight: 'bold', textAlign: "right", fontSize: 15}}>Total: Rp{totalSubtotal}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
    )
}

export default DetailTransaksi