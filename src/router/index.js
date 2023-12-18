import React from "react"
import  { Transaksi, DetailTransaksi } from '../pages'
import { StatusBar, View } from "react-native"
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView } from "react-native-safe-area-context"
import { Login, Shift } from "../pages/auth"
import Navigation from "../components/Navigation"

const Router = () => {
    const Stack = createStackNavigator()


    return (
        <>
            <StatusBar 
                backgroundColor="#ffffff" // Set the desired background color
                style='light'
            />
            <View style={{ flex: 1, backgroundColor: '#162953' }}>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#162953', marginTop: -5 }} />
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Shift' component={Shift} />
                    <Stack.Screen name='Navigation' component={Navigation} />
                    <Stack.Screen name='DetailTransaksi' component={DetailTransaksi} />
                </Stack.Navigator>
            </View>
        </>
    )
}

export default Router