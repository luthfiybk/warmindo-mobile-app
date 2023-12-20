import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from "react-native"
import { InputData } from "../../../../components"
import axios from 'axios'
import SelectDropdown from 'react-native-select-dropdown'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

const TambahRole = ({navigation}) => {
    const insets = useSafeAreaInsets()
    const [data, setData] = useState({
        role: "",
        status: ""
    })

    const handleSubmit = () => {
        const form = {
            role: data.role
        }

        console.log(form)
        
        try {
            axios.post('http://localhost:9000/api/role', form)
            alert('Berhasil menambahkan role')
            navigation.replace('OwnerNavigation')
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeText = (value, nameState) => {
        console.log('onChangeText', value, nameState)
        setData({
            ...data,
            [nameState]: value
        })
    }

    return (
        <View style={{flex: 1, backgroundColor: "#fff", paddingBottom: insets.bottom, paddingRight: insets.right, paddingLeft: insets.left}}>
        <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
        <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 1]} colors={["#162953", "#162953"]} style={{ flex: 1, flexDirection: "column" }}>
            {/* <View style={{ flexDirection: "column", paddingHorizontal: "1%", alignItems: 'center'}}> */}
            <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 0 }}>
                <Text style={{ fontSize: 20, color: "#fff", fontWeight: 'bold' }}>
                    Tambah Role
                </Text>
            </View>

            {/* </View> */}
            <View style={{ flex: 1, backgroundColor: "#fff", marginTop: hp("1%")}}>
                <View style={{marginHorizontal: 10, marginVertical: 10, gap: 10}}>
                    <InputData label="Role" placeholder="Masukkan nama role" onChangeText={(nameState, text) => onChangeText(text, nameState)} value={data.role} nameState="role" />
                    {/* <SelectDropdown 
                        data={status}
                        onSelect={(selectedItem, index) => {
                            // console.log(selectedItem, index)
                            handleChange('status', selectedItem)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                        defaultValue={this.state.gedung}
                        buttonStyle={{borderWidth: 1, borderColor: 'grey', borderRadius: 5, padding: 10, width: '100%'}}
                        defaultButtonText="Pilih Statu"
                        buttonTextStyle={{textAlign: 'flex-start'}}
                        dropdownIconPosition={'right'}
                    /> */}
                    <TouchableOpacity onPress={handleSubmit} style={{backgroundColor: '#162953', padding: 10, borderRadius: 5}}>
                        <Text style={{color: 'white', textAlign: 'center'}}>Tambah Role</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    </View>
    )
}

export default TambahRole