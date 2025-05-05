import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'

import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './app.scss'


import "@taroify/icons/index.scss"
import "@taroify/core/index.scss"


function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log('App launched.')
    console.log('App launched111.')
  })

  // children 是将要会渲染的页面
  return children
}
  


export default App
