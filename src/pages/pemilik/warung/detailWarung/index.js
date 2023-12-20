import { useEffect, useState } from "react"
import { Text, View, StatusBar, TouchableOpacity, Image } from "react-native"
import axios from 'axios'
import { LinearGradient } from "expo-linear-gradient"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"  

const DetailWarung = ({ navigation, route }) => {
    const { idwarung } = route.params

    const [detailWarung, setDetailWarung] = useState([])

    const fetchData = async () => {
        try {
            const result = await axios.get(`http://localhost:9000/api/warung/${idwarung}`)

            console.log(result.data)
            setDetailWarung(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = () => {
        try {
            axios.delete(`http://localhost:9000/api/warung/${idwarung}`)
            alert('Warung berhasil dihapus')
            navigation.replace('OwnerNavigation')
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [detailWarung])



    const insets = useSafeAreaInsets()

    return (
            <View style={{flex: 1, backgroundColor: "#fff", paddingBottom: insets.bottom, paddingRight: insets.right, paddingLeft: insets.left}}>
                <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
                <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 1]} colors={["#162953", "#162953"]} style={{ flex: 1, flexDirection: "column" }}>
                    {/* <View style={{ flexDirection: "column", paddingHorizontal: "1%", alignItems: 'center'}}> */}
                    <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 0 }}>
                        <Text style={{ fontSize: 20, color: "#fff", fontWeight: 'bold' }}>
                            Detail Warung
                        </Text>
                    </View>

                    {/* </View> */}
                    <View style={{ flex: 1, backgroundColor: "#fff", marginTop: hp("1%")}}>
                        <View style={{marginHorizontal: 10, marginVertical: 10, gap: 10}}>
                            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                {/* <Text style={{fontSize: 25, fontWeight: 'bold'}}>Nama Warung: </Text> */}
                                <Text style={{fontSize: 30, textAlign: 'center'}}>{detailWarung.namawarung}</Text>
                            </View>
                            <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                                <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>Logo</Text>
                                <Image 
                                    style={{width: 200, height: 200, borderRadius: 20, justifyContent: 'center', alignSelf: 'center'}}
                                    source={{uri: `http://localhost:9000/public/images/${detailWarung.logo}`}}
                                />
                            </View>
                            <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                                <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center'}}>Gambar</Text>
                                <Image 
                                    style={{width: 200, height: 200, borderRadius: 20, justifyContent: 'center', alignSelf: 'center'}}
                                    source={{uri: `http://localhost:9000/public/images/${detailWarung.gambar}`}}
                                />
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
                                <TouchableOpacity onPress={() => navigation.navigate('UpdateWarung', {idwarung: idwarung})} style={{backgroundColor: 'orange', borderRadius: 20}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, paddingHorizontal: 15}}>
                                        <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Update</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleDelete} style={{backgroundColor: 'red',  borderRadius: 20}}>
                                    <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, paddingHorizontal: 15}}>
                                        <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold', textAlign: 'center', paddingBottom: 7}}>Delete</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
    )
}

export default DetailWarung