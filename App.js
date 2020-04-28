import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';

export default function App() {

  const [quote, setQuote] = useState({})
  const [hasError, setErrors] = useState(false);

  async function fetchQuote (){
    const res = await fetch("https://api.tronalddump.io/random/quote");
    res
      .json()
      .then(res => setQuote(res.value))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchQuote();
  });
 
  const quoteAlert = () => {
    Alert.alert(JSON.stringify(quote))
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.header}>So Donald, tell me how you really feel...</Text>
      <TouchableHighlight style={styles.button} onPress={quoteAlert}>
        <Text> Press here for your dose of Trump wisdom </Text>
      </TouchableHighlight>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#E29F2D',
    padding: 10, 
    alignItems: "center",
    borderRadius: 15


  }
});
