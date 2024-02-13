import React from "react";
import { Text, View, Image, StyleSheet, Dimensions,useWindowDimensions } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({onRestart,roundsCount,userNumber}) => {
  const {width,height} = useWindowDimensions();
  if(height<400){
    imageSize = 150;
  }
  else{
    imageSize = 300;
  }
  const imageStyle={
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2
  };
  return (
    <View style={styles.container}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer,imageStyle]}>
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

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    // borderRadius: deviceWidth < 350 ? 75 : 150,
    // height: deviceWidth < 350 ? 150 : 300,
    // width: deviceWidth < 350 ? 150 : 300,
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
