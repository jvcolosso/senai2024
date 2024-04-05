import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';

const SwitchScreen = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const toggleImage = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <View style={styles.container}>
      {isImageVisible && (
        <Image
          source={require('../assets/interest.jpg')} 
          style={styles.image}
        />
      )}
      <Button title="Alternar Imagem" onPress={toggleImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default SwitchScreen;
