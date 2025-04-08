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
