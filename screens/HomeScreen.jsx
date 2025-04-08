import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TopHeader from '../componets/home_screen/TopHeader';
import CardBox from '../componets/home_screen/CardBox';
import ActiveInspection from '../componets/home_screen/ActiveInspection';
import ComplianceOverview from '../componets/home_screen/CompilanceOverview';
import RecentReports from '../componets/home_screen/RecentReports';
import RecentViolation from '../componets/home_screen/RecentViolation';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <TopHeader />
        <CardBox />
        <ActiveInspection />
        <ComplianceOverview />
        <RecentReports />
        <RecentViolation />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
  },
});

export default HomeScreen;
