import { Appearance, Switch, useColorScheme } from 'react-native'
import React from 'react'

export const DarkModeSwitcher = () => {
  const colorScheme = useColorScheme();

  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={'#f5dd4b'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={()=>Appearance.setColorScheme(colorScheme === 'dark' ? 'light': 'dark')}
      value={colorScheme === 'light'}
    />
  )
}
