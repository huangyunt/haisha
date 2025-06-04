import React from "react";
import { View, Text, Image } from "@tarojs/components";
import { images } from "./constant";
import "./BookShelf.scss";

export const BookShelf: React.FC = () => {

  const navigateToBookDetail = (bookIndex) => {
    wx.navigateTo({
      url: "/pages/BookDetail/BookDetail" + "?id=" + (bookIndex + 1),
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data);
        },
        someEvent: function (data) {
          console.log(data);
        },
      },
      success: function (res) {
        console.log("success");
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit("acceptDataFromOpenerPage", { data: bookIndex });
      },
    });

    // wx.previewImage({
    //   current: images[0], // 当前显示图片的http链接
    //   urls: images, // 需要预览的图片http链接列表
    // });
  };

  return (

    <View className="haisha-bookshelf">
      {images.map((image, index) => (
        <View className="book-item" onClick={() => navigateToBookDetail(index)}>
          <Image className="cover" src={image} mode="aspectFill" />
          <Text className="text">{`CASA阅读启蒙&自然拼读 ${index + 1}`}</Text>
        </View>
      ))}
    </View>
  );
};
