import React, { ComponentType } from 'react'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import type { SwiperProps } from '@tarojs/components'

export const SwiperComponent: React.FC<any> = () => {
  return (
    <Swiper
      className='test-h'
      indicatorColor='#999'
      indicatorActiveColor='#333'
      vertical={true}
      circular
      indicatorDots
      autoplay>
      <SwiperItem>
        <View className='demo-text-1'>1</View>
      </SwiperItem>
      <SwiperItem>
        <View className='demo-text-2'>2</View>
      </SwiperItem>
      <SwiperItem>
        <View className='demo-text-3'>3</View>
      </SwiperItem>
    </Swiper>
  )
}
