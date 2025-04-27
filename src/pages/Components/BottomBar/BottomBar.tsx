import React from "react";
import { AtTabBar } from "taro-ui";

export const BottomBar: React.FC = () => {
  return (
    <AtTabBar
      fixed
      tabList={[{ title: "书架", iconType: "folder" }]}
      onClick={() => {}}
      current={0}
    />
  );
};
