import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
const InstructionText = ({children}) => {
return <Text style={styles.instructionText}>{children}</Text>

}
 export default InstructionText;

 const styles = StyleSheet.create ({
    instructionText: {
        fontFamily: 'poppins-bold',
        fontSize: 30,
        color: Colors.secondary400,
    },
 });