import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({onRestart,roundsCount,userNumber}) => {
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("../assets/images/gameOver.jpg")}
        />
      </View>     
      <Text style={styles.summaryText}>
        Your Phone needed
        <Text style={styles.innerText}> {roundsCount} </Text>
        rounds to geues the number
        <Text style={styles.innerText}> {userNumber} </Text>
      </Text>
      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    height: 300,
    width: 300,
    borderWidth: 3,
    borderColor: Colors.primary700,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  summaryText : {
    fontFamily: 'poppins-bold',
    color: Colors.primary600,
    fontSize: 20,
    textAlign: 'center',
    marginVertical:12

  },
  innerText: {
    fontFamily: 'poppins-bold',
    color: Colors.primary700,
    fontSize: 24
  }
});
