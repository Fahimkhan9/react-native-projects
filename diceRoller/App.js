import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Pressable,
} from 'react-native';

import diceOne from './assets/dice1.png';
import dicetwo from './assets/dice2.png';
import diceThree from './assets/dice3.png';
import diceFour from './assets/dice4.png';
import diceFive from './assets/dice5.png';
import diceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(diceOne);
  const [seondaryUri, setSeondaryUri] = useState(dicetwo);

  const decideImage = num => {
    switch (num) {
      case 0:
        return diceOne;

      case 1:
        return diceOne;

      case 2:
        return dicetwo;

      case 3:
        return diceThree;
      case 4:
        return diceFour;
      case 5:
        return diceFive;
      case 6:
        return diceSix;

      default:
        return diceOne;
    }
  };

  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    setUri(decideImage(randomNumber));
  };

  const changeSecondaryImage = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    setSeondaryUri(decideImage(randomNumber));
  };
  return (
    <>
      <StatusBar backgroundColor="#222831" />
      <View style={styles.root}>
        <Pressable onPress={changeSecondaryImage}>
          <Image style={styles.image} source={seondaryUri} />
        </Pressable>

        <Pressable onPress={changeImage}>
          <Image style={styles.image} source={uri} />
        </Pressable>

        <Text style={styles.btn}>
          Tip:Click on dice to play.If the dice number doesn't change it means
          its the same dice number
        </Text>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222831',
  },
  image: {
    width: 200,
    height: 200,
  },
  btn: {
    fontSize: 20,
    marginTop: 30,
    color: '#F2A365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
});
