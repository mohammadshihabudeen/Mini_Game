import { useState } from "react"
import {
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    View, Text, StyleSheet, Alert, Dimensions, useWindowDimensions
} from "react-native"
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

const StartGameScreen = ({ onPickedNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();
    const marginTopDistance = height < 400 ? 30 : 100;

    const numberInputHandler = (enteredNumber) => {
        setEnteredNumber(enteredNumber);
    }
    const resetButtonHandler = () => {
        setEnteredNumber('');
    }
    const confirmButtonHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number..!'
                , "entered value must be a number between 0 and 100",
                [{ text: 'Okay', style: 'destructive', onPress: resetButtonHandler }]);
            return;
        }
        onPickedNumber(chosenNumber);
    }
    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.container, marginTopDistance, { marginTop: marginTopDistance }]}>
                    <Title>Guess My Number</Title>
                    <Card style={{ marginTop: 50 }}>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput
                            style={styles.numberInput}
                            maxLength={2}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={enteredNumber}
                            onChangeText={numberInputHandler}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetButtonHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmButtonHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>

    )
}

export default StartGameScreen;

//const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen:{
        flex: 1
    },
    container: {
        alignItems: 'center',
        //marginTop: deviceHeight < 420 ? 30 : 100,
        flex: 1
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        color: Colors.secondary400,
        borderBottomColor: Colors.secondary400,
        borderBottomWidth: 2,
        fontFamily: 'poppins-bold',
        marginVertical: 8,
        textAlign: 'center',//allign at center
    },
    buttonsContainer: {
        margin: 20,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flex: 1
    }
});