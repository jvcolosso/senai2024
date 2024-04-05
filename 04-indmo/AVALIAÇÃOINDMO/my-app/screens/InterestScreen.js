import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const InterestScreen = () => {
  const [productValue, setProductValue] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateTotalPayment = () => {
    const value = parseFloat(productValue);
    const rate = parseFloat(interestRate);
    
    if (!isNaN(value) && !isNaN(rate)) {
      const total = value * (1 + rate / 100);
      setTotalPayment(total.toFixed(2));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Valor do Produto"
        value={productValue}
        onChangeText={setProductValue}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Porcentagem de Juros"
        value={interestRate}
        onChangeText={setInterestRate}
        keyboardType="numeric"
      />
      <Button title="Calcular Pagamento" onPress={calculateTotalPayment} />
      <Text style={styles.result}>Total a Pagar: R$ {totalPayment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    width: 200,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InterestScreen;
