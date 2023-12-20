import { View, Text, StatusBar, Pressable, ScrollView, TouchableOpacity } from "react-native"
import { Card } from "../../../components"
import { LinearGradient } from "expo-linear-gradient"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from "react-native-vector-icons/Ionicons"
import React, { useEffect, useState } from "react"
import axios from "axios"

const Role = ({navigation}) => {
    const insets = useSafeAreaInsets()
    const [role, setRole] = useState([])

    const fetchData = async () => {
        try {
            const result = await axios.get('http://localhost:9000/api/role')

            // console.log(result.data)
            setRole(result.data)
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
                        Daftar Role
                    </Text>
                </View>

                {/* </View> */}
                <ScrollView style={{ flex: 1, backgroundColor: "#fff", marginTop: hp("1%")}}>
                    {role.map((item, index) => {
                        return (
                            <>
                                <Card key={index}>
                                    <Text style={{ fontFamily: "Roboto-Bold", fontSize: 20, color: "black", fontWeight: 'bold' }}>{item.role}</Text>
                                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                        <View style={{flexDirection: "column", gap: 5, alignItems: "flex-start"}}>
                                            <Text>Status</Text>
                                        </View>
                                        <View style={{flexDirection: "column", gap: 5, alignItems: "flex-start"}}>
                                        {(item.status === 'Aktif') ? <Text style={{fontSize: 15, color: 'green'}}>{item.status}</Text> : <Text style={{fontSize: 15, color: 'red'}}>{item.status}</Text> }
                                        </View>
                                        <View style={{flexDirection: "column", gap: 3, alignItems: "center", marginTop: 10}}>
                                            <Pressable onPress={() => navigation.navigate('DetailRole', {idrole: item.idrole})}>
                                                <Icon size={20}  name="chevron-forward-sharp"/>
                                            </Pressable>
                                        </View>
                                    </View>
                                </Card>
                            </>
                        )
                    })}
                </ScrollView>
                <View style={{ position: 'absolute', bottom: 100, left: 0, right: 0, backgroundColor: 'transparent', padding: 10 }}>   
                    <TouchableOpacity
                        onPress={() => navigation.navigate('TambahRole')}
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

export default Role