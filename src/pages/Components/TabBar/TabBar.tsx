import React from 'react'
import { AtTabBar } from 'taro-ui'

export const TabBar = () => {

    return (
        <AtTabBar
            fixed
            tabList={[
                { title: '待办事项', iconType: 'bullet-list', text: 'new' },
                { title: '拍照', iconType: 'camera' },
                { title: '文件夹', iconType: 'folder', text: '100', max: 99 }
            ]}
            onClick={() => { }}
            current={0}
        />
    )
}

