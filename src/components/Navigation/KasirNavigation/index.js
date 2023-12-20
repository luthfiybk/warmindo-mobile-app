import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Transaksi, Order } from "../../../pages";
import { SafeAreaView, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Profile from "../../../pages/kasir/profile";

const KasirNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          justifyContent: "center",
          backgroundColor: "#16295",
          // marginBottom:'2%',
          // marginTop:'10%',
          // marginHorizontal:'2%',
          // borderRadius:20,
          // height:80,
          // marginTop:10
          // ...styles.shadow
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Icon name={focused ? "document-text" : "document-text-outline"} size={20} color={focused ? "#000" : "grey"} />
              <Text
                style={{
                  color: focused ? "#000" : "grey",
                  // fontFamily: "Roboto-Bold",
                  fontSize: 10,
                }}
              >
                Order
              </Text>
            </View>
          ),
        }}
        name="Order"
        component={Order}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Icon name={focused ? "document-text" : "document-text-outline"} size={20} color={focused ? "#000" : "grey"} />
              <Text
                style={{
                  color: focused ? "#000" : "grey",
                  // fontFamily: "Roboto-Bold",
                  fontSize: 10,
                }}
              >
                Transaksi
              </Text>
            </View>
          ),
        }}
        name="Transaksi"
        component={Transaksi}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Icon name={focused ? "person" : "person-outline"} size={20} color={focused ? "#000" : "grey"} />
              <Text
                style={{
                  color: focused ? "#000" : "grey",
                  // fontFamily: "Roboto-Bold",
                  fontSize: 10,
                }}
              >
                Profil
              </Text>
            </View>
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default KasirNavigation;
