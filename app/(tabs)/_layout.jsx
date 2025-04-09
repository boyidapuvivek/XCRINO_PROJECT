import { Tabs } from 'expo-router';
import BottomNavBar from '../../componets/home_screen/BottomNavBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <Tabs screenOptions={{ headerShown: false }} tabBar={(props) => <BottomNavBar {...props} />}>
        <Tabs.Screen name="home" options={{ title: 'Home' }} />
        <Tabs.Screen name="schedule" options={{ title: 'Schedule' }} />
        <Tabs.Screen name="reports" options={{ title: 'Reports' }} />
        <Tabs.Screen name="message" options={{ title: 'Messages' }} />
        <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      </Tabs>
    </SafeAreaProvider>
  );
}
