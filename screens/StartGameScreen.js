import { useState } from "react"
import { TextInput, View, Text, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

const StartGameScreen = ({ onPickedNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');
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
    return <View style={styles.container}>
        <Title>Guess My Number</Title>
        <Card style={{marginTop:50}}>
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
}

export default StartGameScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 100,
        flex: 1
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        color: Colors.secondary400,
        borderBottomColor: Colors.secondary400,
        borderBottomWidth: 2,
        fontFamily:'poppins-bold',
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