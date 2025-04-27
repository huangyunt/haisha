import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { SwiperComponent } from '../Components/Swiper/Swiper'
import { TabBar } from '../Components/TabBar/TabBar'

import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <SwiperComponent />
      <TabBar />
    </View>
  )
}
