import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const Card = ({ img, title, bgColor, color }) => {
  const handelRouting = () => {
    if (title === 'Reports') {
      router.push('./reports');
    } else {
      router.push('/comingsoon');
    }
  };
  return (
    <TouchableOpacity
      style={[styles.cardContainer, { backgroundColor: bgColor }]}
      onPress={handelRouting}
    >
      <Image source={img} style={styles.img} />
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '45%',
    aspectRatio: 1.5,
    padding: 10,
    margin: 8,
    justifyContent: 'center',
    gap: 12,
  },
  img: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  text: {
    fontFamily: 'manrope-semibold',
    fontSize: 14,
  },
});

export default Card;
