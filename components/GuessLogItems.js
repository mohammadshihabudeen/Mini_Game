import { View,Text,StyleSheet } from "react-native"
import Colors from "../constants/Colors";
const GuessLogItem = ({roundNo , opponentGuess}) =>{
    return <View style={styles.container}>
        <Text style={styles.text}># {roundNo}</Text>
        <Text style={styles.text}> Opponent's Guess:  {opponentGuess}</Text>
    </View>    
}

export default GuessLogItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Colors.primary700,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: Colors.secondary400,
        elevation: 2,
        shadowColor: 'black',
        paddingVertical:10,
        paddingHorizontal:20,
        margin:10
    },
    text: {
        color: Colors.primary700,
        fontFamily: 'poppins-bold'
    }
});