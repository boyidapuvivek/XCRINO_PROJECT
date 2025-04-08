import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { homeScreen } from '../../constants/home_screen';
import ReportViolationCard from './ReportViolationCard';
import { router } from 'expo-router';

const RecentViolation = () => {
  const data = homeScreen.notifications;
  const handelRouting = () => {
    router.push('/comingsoon');
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.titleContainer}>
          <View style={styles.bar} />
          <Text style={styles.title}>Recent Violations</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handelRouting}>
          <Text style={styles.text}>See All {'>'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ReportViolationCard
            title={item.title}
            location={item.location}
            time={item.time}
            priority={item.priority}
          />
        )}
        contentContainerStyle={styles.listContent}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
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
    lineHeight: 22,
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
  text: {
    fontSize: 12,
    fontFamily: 'monrope-semibold',
    color: '#6F767E',
  },
  listContent: {
    paddingBottom: 16, // Add padding instead of the wrapping View
  },
});

export default RecentViolation;
