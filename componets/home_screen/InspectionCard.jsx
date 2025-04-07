import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import fonts from '../../constants/fonts';
import Images from '../../constants/images';

const InspectionCard = ({ img, title, subTitle, status, progress, timeLineStatus }) => {
  const [fontsLoaded] = fonts();

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.top}>
        <View style={styles.titleContainer}>
          <Image source={img} style={styles.img} />
          <View>
            <Text style={styles.title}>City General Hpspital</Text>
            <Text styles={styles.subTitle}>123 Healtcare Ave</Text>
          </View>
        </View>
        <View>
          <Text>Status</Text>
        </View>
      </View>
      <View>
        <View style={[styles.prgressbar, { width: `${0.75 * 100}%` }]} />
      </View>
      <View>
        <Text>75% Completed</Text>
        <Text>Due in 2 Days</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 118,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  img: {
    height: 40,
    width: 40,
  },
  top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'manrope-regular',
    fontSize: 16,
    color: '#111827',
  },
  subTitle: {
    fontFamily: 'manrope-regular',
    fontSize: 14,
    color: '#6B7280',
  },
  prgressbar: {
    height: 6,
    width: 210,
    backgroundColor: '#4CAF50',
    borderRadius: 2,
    marginTop: 8,
  },
});

export default InspectionCard;
