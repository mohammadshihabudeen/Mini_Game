import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/Colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver,setGameOver] =useState(false);

const [fontsLoaded]=  useFonts({
    'open-sans': require('./assets/fonts/OpenSans.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')
  });
  if (!fontsLoaded){
    return <AppLoading/>;
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  }
  const gameOverHandler=() =>{
    setGameOver(true)
  }
  const gameRestartHandler= () =>{
    setGameOver(false);
    setUserNumber();
  }
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>;
  }
  if (gameOver){
    screen = <GameOverScreen onRestart={gameRestartHandler}/>
  }
  return (
    <LinearGradient colors={[Colors.primary700, Colors.secondary600]} style={styles.container}>
      <ImageBackground
        source={require('./assets/images/bg.jpg')}
        resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroundimage}
      >
        <SafeAreaView  style={styles.container}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundimage: {
    opacity: 0.2
  }
});
