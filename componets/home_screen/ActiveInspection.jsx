import React from 'react';
import InspectionCard from './InspectionCard';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Images } from '../../constants/images';

const ActiveInspection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.titleContainer}>
          <View style={styles.bar} />
          <Text style={styles.title}>Active Inspection</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>See All {'>'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <InspectionCard
          img={Images.icons.hospital}
          title="City General Hospital"
          subTitle="123 Healthcare Ave"
          status="Status"
          progress={0.5}
          timeLineStatus={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 580,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
  },
  top: {
    display: 'flex',
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  bar: {
    width: 4,
    height: 24,
    backgroundColor: '#CABDFF',
    borderRadius: 2,
  },
  titleContainer: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontFamily: 'manrope-semibold',
    fontSize: 18,
    color: '#172B4D',
  },
  button: {
    height: 36,
    width: 82,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#EFEFEF',
    borderRadius: 100,
  },
});

export default ActiveInspection;
