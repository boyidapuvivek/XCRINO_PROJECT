import { View, StyleSheet } from 'react-native';
import TopHeader from '../componets/home_screen/TopHeader';
import CardBox from '../componets/home_screen/CardBox';
import ActiveInspection from '../componets/home_screen/ActiveInspection';

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <TopHeader />
      <CardBox />
      <ActiveInspection />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export default HomeScreen;
