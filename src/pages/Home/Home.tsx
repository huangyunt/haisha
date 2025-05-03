import { useLoad } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { TopTab } from "./Components/TopTab/TopTab";
import { BookShelf } from "./Components/BookShelf/BookShelf";
import { BottomBar } from "./Components/BottomBar/BottomBar";

import "./Home.scss";

export default function Home() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="haisha-home">
      <TopTab />
      <BookShelf />
      <BottomBar />
    </View>
  );
}
