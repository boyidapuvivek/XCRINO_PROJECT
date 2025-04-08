import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <View style={[styles.fg, { width: `${progress * 100}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  bg: {
    height: 6,
    width: '100%',
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
  },
  fg: {
    height: 6,
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
});

export default ProgressBar;
