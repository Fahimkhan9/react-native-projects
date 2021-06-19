import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  PoUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 154,
  DINAR: 0.0043,
};

import Snackbar from 'react-native-snackbar';

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [result, setResult] = useState(0);

  const handlePress = currency => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Please enter a value',

        backgroundColor: '#120E43',
        textColor: '#CAD5E2',
      });
    }

    const resultVar = parseFloat(inputValue) * currencyPerRupee[currency];
    setResult(resultVar.toFixed(2));
  };

  return (
    <>
      <ScrollView
        backgroundColor="#1b262c"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{result}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter "
              placeholderTextColor="#c1c1c1"
              value={inputValue}
              onChangeText={val => {
                setInputValue(val);
              }}
            />
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRupee).map(currency => (
              <TouchableOpacity
                onPress={() => handlePress(currency)}
                key={currency}
                style={styles.converterButton}>
                <Text style={styles.convertButtonText}>{currency}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },
  resultValue: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bbe1fa',
  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.3%',
    borderWidth: 2,
    borderColor: '#bbe1fa',
    marginTop: 10,
    backgroundColor: '#8D3DAF',
  },
  convertButtonText: {
    color: '#FFF',
    fontSize: 15,
  },
});
