import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/Colors";
const Title = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;
const styles = StyleSheet.create({

    title: {
        fontFamily: 'poppins-bold',
        padding: 10,
        color :'white',
        fontSize: 25,
        //fontWeight: "bold",
        borderColor: 'white',
        borderWidth: Platform.OS === "ios" ? 2 : 0,
        borderWidth: Platform.select({ios: 2, android: 2}),
        borderRadius: 5,
        textAlign: 'center',
        maxWidth: "80%",//does not exceeds the limit
        minWidth: "90%",//should be this or above 
    }
});