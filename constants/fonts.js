import { useFonts } from 'expo-font';

const fonts = () => {
  const [fontsLoaded] = useFonts({
    'manrope-semibold': require('../assets/fonts/Manrope/Manrope-SemiBold.ttf'),
    'manrope-medium': require('../assets/fonts/Manrope/Manrope-Medium.ttf'),
    'manrope-regular': require('../assets/fonts/Manrope/Manrope-Regular.ttf'),
    'manrope-light': require('../assets/fonts/Manrope/Manrope-Light.ttf'),
    'manrope-bold': require('../assets/fonts/Manrope/Manrope-Bold.ttf'),
    'manrope-extrabold': require('../assets/fonts/Manrope/Manrope-ExtraBold.ttf'),
    'manrope-extralight': require('../assets/fonts/Manrope/Manrope-ExtraLight.ttf'),
  });

  return [fontsLoaded];
};

export default fonts;
