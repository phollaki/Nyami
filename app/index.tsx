import { SafeAreaView, Text, View } from 'react-native';
import { Avatar } from '../src/components/Avatar';
import React from 'react';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Page() {
  return (
    <SafeAreaView className="flex-1">
      <View className='flex flex-row items-center justify-between p-5'>
        <View className='flex flex-row items-center gap-2'>
          <Avatar url='https://media.licdn.com/dms/image/D5603AQF0cE71A1s9ZQ/profile-displayphoto-shrink_800_800/0/1704319483917?e=1714003200&v=beta&t=fHoYSk14V_L7P-rgyFMbN21yAmq-hHsTTDiNg1q-jjk' />
          <Text className='text-xl font-semibold'>Hi, P-Holl !</Text>
        </View>
        <Link href="/settings"><Icon name="settings-outline" size={30} /></Link>
      </View>
    </SafeAreaView>
  )
}