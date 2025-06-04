import { useLoad, useShareAppMessage } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { TopTab } from "./Components/TopTab/TopTab";
import { BookShelf } from "./Components/BookShelf/BookShelf";
import { BottomBar } from "./Components/BottomBar/BottomBar";

import "./Home.scss";

export default function Home() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  useShareAppMessage(() => {
    return {
      title: '海沙牛娃电子书', // 转发标题
      path: 'pages/Home/Home', // 转发路径，可以携带参数
      imageUrl: '/images/share.png', // 自定义分享图片
      success: function (res) {
        // 转发成功
        console.log('转发成功', res);
      },
      fail: function (res) {
        // 转发失败
        console.log('转发失败', res);
      }
    }
  })

  return (
    <View className="haisha-home">
      <TopTab />
      <BookShelf />
      <BottomBar />
    </View>
  );
}
