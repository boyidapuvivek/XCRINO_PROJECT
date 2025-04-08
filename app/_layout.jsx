import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'manrope-semibold': require('../assets/fonts/Manrope/Manrope-SemiBold.ttf'),
    'manrope-medium': require('../assets/fonts/Manrope/Manrope-Medium.ttf'),
    'manrope-regular': require('../assets/fonts/Manrope/Manrope-Regular.ttf'),
    'manrope-light': require('../assets/fonts/Manrope/Manrope-Light.ttf'),
    'manrope-bold': require('../assets/fonts/Manrope/Manrope-Bold.ttf'),
    'manrope-extrabold': require('../assets/fonts/Manrope/Manrope-ExtraBold.ttf'),
    'manrope-extralight': require('../assets/fonts/Manrope/Manrope-ExtraLight.ttf'),
  });

  if (!fontsLoaded) return <View style={{ flex: 1, backgroundColor: '#fff' }} />; // or a splash screen

  return (
    <>
      <StatusBar hidden />
      <Stack initialRouteName="(tabs)" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
