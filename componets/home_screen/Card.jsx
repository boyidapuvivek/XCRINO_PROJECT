import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import fonts from '../../constants/fonts';

const Card = ({ img, title, bgColor, color }) => {
  const [fontsLoaded] = fonts();

  return (
    <View style={[styles.cardContainer, { backgroundColor: bgColor }]}>
      <Image source={img} style={styles.img} />
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '50%',
    width: '45%',
    paddingLeft: 10,
    marginVertical: 14,
    marginHorizontal: 10,
    justifyContent: 'center',
    gap: 12,
  },
  img: {
    height: 24,
    width: 24,
  },
  text: {
    fontFamily: 'manrope-semibold',
    fontSize: 14,
  },
});

export default Card;
