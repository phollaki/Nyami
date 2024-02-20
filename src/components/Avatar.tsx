import { StyleSheet, Image } from 'react-native'
import React from 'react'

type AvatarProps = {
  url: string;
};

export const Avatar = ({url}: AvatarProps) => {
  return (
    <Image
        style={styles.avatar}
        source={{ uri: url}}
      />
  )
}

const styles = StyleSheet.create({
  avatar: {
    height: 60,
    width: 60,
    borderWidth:  2,
    borderColor: '#fff',
    borderRadius: 999,
  }
})