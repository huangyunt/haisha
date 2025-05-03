
import React from "react";
import { AtTabBar } from "taro-ui";
import { Tabs } from "@tarojs/components";

export const BottomBar: React.FC = () => {
  return (
    <AtTabBar
      fixed
      current={1}
      onClick={() => { }}
      color="rgb(80, 80, 80)"
      backgroundColor="rgb(245, 245, 245)"
      tabList={[{ title: "书架", iconType: "folder" }]}
    />
  );
};
