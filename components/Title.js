import { Text, StyleSheet } from "react-native";
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
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'center',
    }
});