import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Warung, Role } from "../../../pages";
import { SafeAreaView, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import OwnerProfile from "../../../pages/pemilik/profile";

const OwnerNavigation = () => {
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
              <Icon name={focused ? "home" : "home-outline"} size={20} color={focused ? "#000" : "grey"} />
              <Text
                style={{
                  color: focused ? "#000" : "grey",
                  // fontFamily: "Roboto-Bold",
                  fontSize: 10,
                }}
              >
                Warung
              </Text>
            </View>
          ),
        }}
        name="Warung"
        component={Warung}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center" }}>
              <Icon name={focused ? "people" : "people-outline"} size={20} color={focused ? "#000" : "grey"} />
              <Text
                style={{
                  color: focused ? "#000" : "grey",
                  // fontFamily: "Roboto-Bold",
                  fontSize: 10,
                }}
              >
                Role
              </Text>
            </View>
          ),
        }}
        name="Role"
        component={Role}
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
        name="OwnerProfile"
        component={OwnerProfile}
      />
    </Tab.Navigator>
  );
};

export default OwnerNavigation;
