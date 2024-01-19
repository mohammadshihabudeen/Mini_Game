import { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../components/GuessLogItems";
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
    const [rounds, setRounds] = useState([]);
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(rounds.length);
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
        const newRndNo = generateRandomNumber(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNo);
        setRounds((rounds) => {
            console.log(currentGuess)
            return [newRndNo, ...rounds]
        });
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
        <View style={styles.listContainer}>
            <FlatList
                data={rounds} //array of data
                renderItem={itemData => {
                    return (
                        <GuessLogItem roundNo={rounds.length - itemData.index} opponentGuess={itemData.item} />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
 />
        </View>

    </View>
}
export default GameScreen;

const styles = StyleSheet.create({
    gameScreenContainer: {
        flex:1,
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
    ,
    listContainer: {
        flex: 1,
        padding: 16,
    }
});