import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from '@expo/vector-icons';
const GameScreen = ({ userNumber, onGameOver }) => {
    const generateRandomNumber = (min, max, exclude) => {
        const rndNum = Math.floor(Math.random() * (max - min)) + min;

        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return rndNum;
        }
    }

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);
    const initialGuess = generateRandomNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [userNumber, currentGuess, onGameOver])//if any one changes
    const nextGuessHandler = (direction) => {
        if (
            (direction == "lower" && currentGuess < userNumber) ||
            (direction == "higher" && currentGuess > userNumber)
        ) {
            Alert.alert("Don't Lie!"
                , "You know that is wrong...!",
                [{ text: 'Okay', style: 'cancel' }]);
            return;
        }
        if (direction == "lower") {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary)
        const newRndNo = generateRandomNumber(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNo);
    }

    return <View style={styles.gameScreenContainer}>
        <Title>Oppponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}><Ionicons name="remove-circle-outline" size={24} color="white" /></PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}><Ionicons name="add-circle-outline" size={24} color="white" /></PrimaryButton>
                </View>
            </View>
        </Card>
        <InstructionText>Rounds</InstructionText>
    </View>
}
export default GameScreen;

const styles = StyleSheet.create({
    gameScreenContainer: {
        padding: 20,
        marginTop: 70,
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