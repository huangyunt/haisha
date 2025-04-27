import React from "react";
import { AtGrid } from "taro-ui";
import { View, Text, Image } from "@tarojs/components";
import { images } from "./constant";
import "./BookShelf.scss";

export const BookShelf: React.FC = () => {
  const [image1, image2, image3, image4, image5, image6] = images;

  const downloadAndPreViewPDF = () => {
    const url =
      "https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford_Phonics_World_2_SB.pdf?sign=226e06c723dc92193357a4a539b6d6e7&t=1745741547";

    // wx.downloadFile({
    //   url: url,
    //   success(res) {
    //     if (res.statusCode === 200) {
    //       const tempFilePath = res.tempFilePath;
    //       wx.openDocument({
    //         filePath: tempFilePath,
    //         fileType: "pdf",
    //         success(docRes) {
    //           console.log("打开PDF文件成功");
    //         },
    //         fail(docErr) {
    //           console.error("打开PDF文件失败", docErr);
    //         },
    //       });
    //     }
    //   },
    //   fail(err) {
    //     console.error("下载PDF文件失败", err);
    //   },
    // });
  };

  return (
    // <AtGrid
    //   onClick={downloadAndPreViewPDF}
    //   data={[
    //     {
    //       image: image1,
    //     },
    //     {
    //       image: image2,
    //     },
    //     {
    //       image: image3,
    //     },
    //     {
    //       image: image4,
    //     },
    //     {
    //       image: image5,
    //     },
    //     {
    //       image: image6,
    //     },
    //   ]}
    // />

    <View className="bookshelf">
      {images.map((image) => (
        <View className="book-item">
          <Image src={image} mode="aspectFill" className="book-cover" />
        </View>
      ))}
    </View>

    // <View className="at-row at-row--wrap">
    //   <View className="at-col at-col-4">A</View>
    //   <View className="at-col at-col-4">B</View>
    //   <View className="at-col at-col-4">C</View>
    //   <View className="at-col at-col-4">D</View>
    //   <View className="at-col at-col-4">E</View>
    // </View>
  );
};
