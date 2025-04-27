import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { BookShelf } from '../Components/BookShelf/BookShelf'
import { TabBar } from '../Components/TabBar/TabBar'

import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <BookShelf />
      <TabBar />
    </View>
  )
}
