import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from 'react-native';

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          padding: 10,
          backgroundColor: colorScheme === 'dark' ?  '#0A0E0B' : '#fff',
        },
      }}
    />
  );
}