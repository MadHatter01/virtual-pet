import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import React, {useState, useEffect } from 'react';
import { Stack, Text } from 'tamagui';
import { TamaguiProvider } from 'tamagui';

import config from '../tamagui.config';

export default function Layout() {
  const [happiness, setHappiness] = useState(50);
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

  return (
    <TamaguiProvider config={config}>
      <Stack flex={1} justifyContent='center' alignItems='center'>
        <Text>Happiness : {happiness}</Text>

      </Stack>
    </TamaguiProvider>
  );
}
