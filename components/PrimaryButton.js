import { Text, View, StyleSheet, Pressable } from "react-native"
import Colors from "../constants/Colors";
const PrimaryButton = ({ children,onPress }) => {
    return (
        <View style={styles.outerContainer}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.pressed, styles.innerContainer]
                        : styles.innerContainer}
                onPress={onPress}
                android_ripple={{ color: 'grey' }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 20,
        margin: 4,
        overflow: 'hidden',
        //alignItems: 'center',
    },
    innerContainer: {
        backgroundColor: Colors.primary700,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        fontFamily: 'poppins-bold',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.25 //75%
    }
});

