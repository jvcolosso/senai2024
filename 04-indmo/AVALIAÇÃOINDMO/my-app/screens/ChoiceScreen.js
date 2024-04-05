import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ChoiceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Ir para Tela de Escolha"
        onPress={() => navigation.navigate('Switch')}
      />
      <Button
        title="Ir para Tela de Juros"
        onPress={() => navigation.navigate('Interest')}
      />
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

export default ChoiceScreen;
