import React from "react";
import { Transaksi, DetailTransaksi, Warung, Role, DetailRole, TambahRole, 
    UpdateRole, DetailWarung, TambahWarung, UpdateWarung } from "../pages"
import { StatusBar, View } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { SafeAreaView } from "react-native-safe-area-context"
import { Login, Shift } from "../pages/auth"
import KasirNavigation from "../components/Navigation/KasirNavigation"
import OwnerNavigation from "../components/Navigation/OwnerNavigation"


const Router = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar
        backgroundColor="#ffffff" // Set the desired background color
        style="light"
      />
      <View style={{ flex: 1, backgroundColor: "#162953" }}>
        <SafeAreaView style={{ flex: 0, backgroundColor: "#162953", marginTop: -5 }} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} />
                    {/* <Stack.Screen name='Shift' component={Shift} />
                    <Stack.Screen name='Navigation' component={Navigation} />
                    <Stack.Screen name='DetailTransaksi' component={DetailTransaksi} /> */}
          {/* <Stack.Screen name='Warung' component={Warung} /> */}
          {/* <Stack.Screen name="Role" component={Role} /> */}
            <Stack.Screen name="OwnerNavigation" component={OwnerNavigation} />
            <Stack.Screen name="DetailRole" component={DetailRole} />
            <Stack.Screen name="TambahRole" component={TambahRole} />
            <Stack.Screen name="UpdateRole" component={UpdateRole} />
            <Stack.Screen name="DetailWarung" component={DetailWarung} />
            <Stack.Screen name="TambahWarung" component={TambahWarung} />
            <Stack.Screen name="UpdateWarung" component={UpdateWarung} /> 
        </Stack.Navigator>
      </View>
    </>
  );
};

export default Router;
