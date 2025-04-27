import React, { useState } from "react";
import { View, Text, Image } from "@tarojs/components";
import { AtTabs, AtTabsPane } from "taro-ui";

export const TopTab: React.FC = () => {
  const tabList = [
    { title: "全部" },
    // { title: "标签页2" },
    // { title: "标签页3" },
  ];

  const [current, setCurrent] = useState(1);
  return (
    // <AtTabs
    //   current={current}
    //   tabList={tabList}
    //   onClick={(val) => setCurrent(val)}
    // >
    //   <AtTabsPane current={current} index={0}>
    //     {/* <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
    //       标签页一的内容
    //     </View> */}
    //   </AtTabsPane>
    // </AtTabs>
    <View className="book-item">
      <Text>全部</Text>
    </View>
  );
};
