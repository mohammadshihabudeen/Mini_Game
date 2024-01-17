import { View,Text, StyleSheet } from "react-native"
import Colors from "../constants/Colors";
const NumberContainer = ({children}) => {
return <View style={styles.container}>
    <Text style={styles.numberText}>
        {children}
    </Text>
</View>
}
 
export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        padding:24,
        borderWidth: 4,
        borderColor: Colors.secondary400,
        alignItems: 'center',
        justifyContent: 'center',
        margin:24
    },
    numberText: {
        color: Colors.secondary400,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});