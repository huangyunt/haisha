import { View } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { TopTab } from "../Components/TopTab/TopTab";
import { BookShelf } from "../Components/BookShelf/BookShelf";
import { BottomBar } from "../Components/BottomBar/BottomBar";

import "./Home.scss";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <TopTab />
      <BookShelf />
      <BottomBar />
    </View>
  );
}
