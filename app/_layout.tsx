import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import React, {useState, useEffect } from 'react';
import { Button, Stack, Text } from 'tamagui';
import { TamaguiProvider } from 'tamagui';
import config from '../tamagui.config';
import PetImage from '~/components/PetImage';
import MyButton from '~/components/MyButton';
import Cat from '~/components/Cat';

export default function Layout() {
  const [happiness, setHappiness] = useState(10);
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  const playWithPet = ()=>{
    setHappiness((prev)=> Math.min(prev+10, 100));
  }

  return (
    <TamaguiProvider config={config}>
      <Stack flex={1} justifyContent='center' alignItems='center'>
        <Text>Happiness : {happiness}</Text>
        <Cat />
        <PetImage happiness={happiness} />
        <MyButton title="Play with Cat" onPress={()=> playWithPet()} />
      </Stack>
    </TamaguiProvider>
  );
}


