import { View, React } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const Card = ({ children }) => {
    return (
        <View style={{ flexDirection: "row", backgroundColor: "#fff", height: hp("13%"), marginTop: hp("1%"), width: "100%", alignItems: "flex-start", shadowColor: "#000", justifyContent: "space-evenly", paddingHorizontal: "2%" }}>
            <View style={{ borderWidth: 1, width: "93%", height: hp("13%"), paddingHorizontal: "5%", justifyContent: "space-evenly", borderRadius: 10,  borderColor: "black" }}>
                {children}
            </View>
        </View>
    )
}

export default Card