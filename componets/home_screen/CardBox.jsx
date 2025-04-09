import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';
import { homeScreen } from '../../constants/home_screen';

const CardBox = () => {
  return (
    <View style={styles.container}>
      {homeScreen.cardBoxData.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          title={item.title}
          bgColor={item.bgColor}
          color={item.color}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
});

export default CardBox;
