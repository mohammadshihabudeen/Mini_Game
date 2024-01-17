import { Children } from "react";
import { View,Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
const Card = ({children,style}) => {
    return <View style={[styles.inputContainer,style]}>{children}</View>
}
export default Card;
const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary500,
        borderRadius: 8,
        borderColor: Colors.secondary400,
        //in android only
        elevation: 10,
        //in IOS only
        shadowColor: Colors.secondary400,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.16,
        shadowRadius: 16,

    },
});