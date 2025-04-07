import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card';
import { Images } from '../../constants/images';

const CardBox = ({ image, title, description }) => {
  return (
    <View style={styles.container}>
      <Card
        img={Images.icons.inspection}
        title={'New Inspection'}
        bgColor={'#EFF6FF'}
        color={'#2563EB'}
      />
      <Card img={Images.icons.reports} title={'Reports'} bgColor={'#FAF5FF'} color={'#9333EA'} />
      <Card img={Images.icons.warning} title={'Violations'} bgColor={'#FCF4EA'} color={'#EA580C'} />
      <Card img={Images.icons.book} title={'Guidlines'} bgColor={'#EFFCF3'} color={'#16A34A'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
    flexWrap: 'wrap',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
});

export default CardBox;
