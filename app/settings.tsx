import { Text, SafeAreaView, View } from 'react-native'
import React from 'react'
import { DarkModeSwitcher } from '../src/components/Switch'
import { Avatar } from '../src/components/Avatar'
import { Link } from 'expo-router'

export default function settings() {
  return (
    <SafeAreaView>
      <View className='flex flex-row items-center justify-between p-5'>
        <View className='flex flex-row items-center gap-2'>
          <Link href="/">
          <Avatar url='https://media.licdn.com/dms/image/D5603AQF0cE71A1s9ZQ/profile-displayphoto-shrink_800_800/0/1704319483917?e=1714003200&v=beta&t=fHoYSk14V_L7P-rgyFMbN21yAmq-hHsTTDiNg1q-jjk' />
          </Link>
          <Text className='text-xl font-semibold'>Settings</Text>
        </View>
        <DarkModeSwitcher />
      </View>

    </SafeAreaView>
  )
}