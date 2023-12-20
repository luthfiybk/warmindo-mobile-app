import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from "react-native"
import { InputData } from "../../../../components"
import axios from 'axios'
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as ImagePicker from 'expo-image-picker'

const TambahWarung = ({navigation}) => {
    const insets = useSafeAreaInsets()
    const [warung, setWarung] = useState({
        namawarung: "",
        logo: null,
        gambar: null
    })

    const checkMediaLibraryPermissions = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Izin akses galeri foto diperlukan untuk memilih gambar.');
        }
    };

    const pickImage = async (type) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        if (!result.canceled) {
            setWarung({ ...warung, [type]: result.assets[0] });
        }
    };
    
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('namawarung', warung.namawarung);
        if(warung.logo) {
            formData.append('logo', {
                uri: warung.logo.uri,
                type: 'image/*',
                name: 'logo',
            });
        }

        if(warung.gambar) {
            formData.append('gambar', {
                uri: warung.gambar.uri,
                type: 'image/*',
                name: 'gambar',
            });
        }

        console.log(formData)
    
        try {
            const response = await axios.post('http://localhost:9000/api/warung', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
        });
    
            console.log(response.data);
            alert('Warung berhasil ditambahkan!');
            navigation.navigate('OwnerNavigation')
        } catch (error) {
            console.error(error);
            alert('Gagal menambahkan warung.');
        }
    };

    const onChangeText = (value, nameState) => {
        // console.log('onChangeText', value, nameState)
        setWarung({
            ...warung,
            [nameState]: value
        })
    }

    useEffect(() => {
        checkMediaLibraryPermissions()
    }, [])

    // console.log(pickImage('logo'))
    console.log(warung)

    return (
        <View style={{flex: 1, backgroundColor: "#fff", paddingBottom: insets.bottom, paddingRight: insets.right, paddingLeft: insets.left}}>
        <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
        <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 1]} colors={["#162953", "#162953"]} style={{ flex: 1, flexDirection: "column" }}>
            {/* <View style={{ flexDirection: "column", paddingHorizontal: "1%", alignItems: 'center'}}> */}
            <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 0 }}>
                <Text style={{ fontSize: 20, color: "#fff", fontWeight: 'bold' }}>
                    Tambah Warung
                </Text>
            </View>

            {/* </View> */}
            <View style={{ flex: 1, backgroundColor: "#fff", marginTop: hp("1%")}}>
                <View style={{marginHorizontal: 10, marginVertical: 10, gap: 10}}>
                    <InputData label="Nama Warung" placeholder="Masukkan nama warung" onChangeText={(nameState, text) => onChangeText(text, nameState)} value={warung.namawarung} nameState="namawarung" />
                    <TouchableOpacity onPress={() => pickImage('logo')}>
                        <Text style={{color: 'black', textAlign: 'center', padding: 10, backgroundColor: 'grey', marginHorizontal: 50}}>Pilih Logo</Text>
                    </TouchableOpacity>
                    {warung.logo && <Image source={{ uri: warung.logo.uri }} style={{ width: 200, height: 200, justifyContent: 'center', alignSelf: 'center' }} />}

                    <TouchableOpacity onPress={() => pickImage('gambar')}>
                        <Text style={{color: 'black', textAlign: 'center', padding: 10, backgroundColor: 'grey', marginHorizontal: 50}}>Pilih Gambar</Text>
                    </TouchableOpacity>
                    {warung.gambar && <Image source={{ uri: warung.gambar.uri }} style={{ width: 200, height: 200, justifyContent: 'center', alignSelf: 'center' }} />}

                    {/* <TouchableOpacity onPress={handleUpload}>
                        <Text>Upload Warung</Text>
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={handleUpload} style={{backgroundColor: '#162953', padding: 10, borderRadius: 5}}>
                        <Text style={{color: 'white', textAlign: 'center'}}>Tambah Warung</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
    </View>
    )
}

export default TambahWarung