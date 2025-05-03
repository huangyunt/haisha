import React, { useState, useEffect } from "react";
import { Swiper, SwiperItem, Image, View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { images } from "./constant";

import "./BookPreview.scss";
import { Book } from "./Book";

const BookPreview: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>(images);
  const [currentPage, setCurrentPage] = useState(0);
  const [showTopBar, setShowTopBar] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    // const params = Taro.getCurrentInstance()?.router.params;
    // if (params && params.imageUrls) {
    //     setImageUrls(JSON.parse(params.imageUrls));
    // }
  }, []);

  const handlePageTap = () => {
    setShowTopBar(!showTopBar);
    setShowBottomBar(!showBottomBar);
  };

  const goBack = () => {
    Taro.navigateBack({ delta: 1 });
  };

  const showCatalog = () => {
    console.log("查看目录");
  };

  const playAudio = () => {
    console.log("播放音频");
  };

  return (
    <View className="haisha-book-preview-container" onClick={handlePageTap}>
      <View className={showTopBar ? "top-bar" : "top-bar none"}>
        <Text className="back-button" onClick={goBack}>
          返回
        </Text>
      </View>
      {/* <View className="book-pages">
        <Swiper
          current={currentPage}
          onChange={(e) => setCurrentPage(e.detail.current)}
          style={{ height: "600px" }}
        >
          {imageUrls.map((url, index) => (
            <SwiperItem key={index}>
              <Image src={url} mode="widthFix" className="book-page" />
            </SwiperItem>
          ))}
        </Swiper>
      </View> */}
      <Book />
      {/* {showBottomBar && (
        <View className="bottom-bar">
          <Text className="catalog-button" onClick={showCatalog}>
            目录
          </Text>
          <Text className="audio-button" onClick={playAudio}>
            播放音频
          </Text>
        </View>
      )} */}
    </View>
  );
};

export default BookPreview;
