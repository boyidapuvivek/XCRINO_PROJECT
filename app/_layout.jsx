import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Layout = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ title: 'App' }} />
        <Stack.Screen name="screens/home" options={{ title: 'Home' }} />
        <Stack.Screen name="screens/reports" options={{ title: 'Reports' }} title="Report" />
      </Stack>
    </>
  );
};

export default Layout;
