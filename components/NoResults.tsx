import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

const NoResults = () => {
  return (
    <View className='flex items-center justify-center my-5'>
      <Image source={images.noResult} resizeMode='contain' className='w-11/12 h-80' />
      <Text className='text-2xl font-rubik-bold text-black-300 mt-5 '>NoResults</Text>
      <Text className='text-base font-rubik text-black-200 mt-2 '>
        We could not find any properties!!
      </Text>
    </View>
  )
}

export default NoResults