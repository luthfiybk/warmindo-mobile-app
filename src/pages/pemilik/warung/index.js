import { View, Text, StatusBar, Pressable, ScrollView, TouchableOpacity } from "react-native"
import { Card } from "../../../components"
import { LinearGradient } from "expo-linear-gradient"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from "react-native-vector-icons/Ionicons"
import React, { useEffect, useState } from "react"
import axios from "axios"

const Warung = ({navigation}) => {
    const insets = useSafeAreaInsets()
    const [warung, setWarung] = useState([])

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:9000/api/warung')

            // console.log(result.data)
            setWarung(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [warung])

    return (
        <View style={{flex: 1, backgroundColor: "#fff", paddingBottom: insets.bottom, paddingRight: insets.right, paddingLeft: insets.left}}>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
            <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 1]} colors={["#162953", "#162953"]} style={{ flex: 1, flexDirection: "column" }}>
                {/* <View style={{ flexDirection: "column", paddingHorizontal: "1%", alignItems: 'center'}}> */}
                <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 0 }}>
                    <Text style={{ fontSize: 20, color: "#fff", fontWeight: 'bold' }}>
                        Daftar Warung
                    </Text>
                </View>

                {/* </View> */}
                <ScrollView style={{ flex: 1, backgroundColor: "#fff", marginTop: hp("1%")}}>
                    {warung.map((item, index) => {
                        return (
                            <>
                                <Card key={index}>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <Text style={{ fontFamily: "Roboto-Bold", fontSize: 20, color: "black", fontWeight: 'bold'}}>{item.namawarung}</Text>
                                            <Pressable style={{marginTop: 8}} onPress={() => navigation.navigate('DetailWarung', {idwarung: item.idwarung})}>
                                                <Icon size={20}  name="chevron-forward-sharp"/>
                                            </Pressable>
                                    </View>
                                </Card>
                            </>
                        )
                    })}
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 100, left: 0, right: 0, backgroundColor: 'transparent', padding: 10 }}>   
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TambahWarung')}
                        style={{
                            position: 'absolute',
                            right: 20,
                            backgroundColor: 'lime',
                            padding: 10,
                            borderRadius: 30,
                        }}
                    >
                        <Icon name={'add'} size={35} color={'white'}/>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}

export default Warung