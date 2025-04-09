import React from 'react';
import InspectionCard from './InspectionCard';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { homeScreen } from '../../constants/home_screen';
import { router } from 'expo-router';

const ActiveInspection = () => {
  const handelRouting = () => {
    router.push('/comingsoon');
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.titleContainer}>
          <View style={styles.bar} />
          <Text style={styles.title}>Active Inspection</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handelRouting}>
          <Text style={styles.text}>See All {'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        {homeScreen.inspectionData.map((item, index) => (
          <InspectionCard key={index} {...item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
    paddingTop: 10,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  bar: {
    width: 4,
    height: 24,
    backgroundColor: '#CABDFF',
    borderRadius: 2,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontFamily: 'manrope-semibold',
    fontSize: 18,
    lineHeight: 22,
    color: '#172B4D',
  },
  button: {
    height: 36,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#EFEFEF',
    borderRadius: 100,
  },
  text: {
    fontSize: 12,
    fontFamily: 'manrope-semibold',
    color: '#6F767E',
  },
});

export default ActiveInspection;
