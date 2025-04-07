import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TopHeader from '../../componets/home_screen/TopHeader';

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <TopHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 100,
  },
  tag: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default Home;
