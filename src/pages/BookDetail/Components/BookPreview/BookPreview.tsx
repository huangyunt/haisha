import React, { useState, useEffect } from "react";
import { AtFloatLayout, AtList, AtListItem, AtIcon } from "taro-ui"
import { Swiper, SwiperItem, Image, View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { images } from "./constant";
import { Book } from "./Book";

import "./BookPreview.scss";

const BookPreview: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>(images);
  const [currentPage, setCurrentPage] = useState(0);
  const [showTopBar, setShowTopBar] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [catalogVisible, setCatalogVisible] = useState(false)

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

  // 查看目录
  const handleCatalogShowingUp = () => {
    setCatalogVisible(true)
    setShowTopBar(false)
    setShowBottomBar(false)
  };

  const playAudio = () => {
    console.log("播放音频");
  };

  return (
    <View className="haisha-book-preview-container">
      <View className={`top-bar ${showTopBar ? '' : 'none'}`} onClick={goBack}>
        <View className="left-container">
          <AtIcon value='chevron-left' size='25' />
          <Text className="back-button">
            返回
          </Text>
        </View>
        <AtIcon className='file-audio' value='file-audio' size='25' />
      </View>

      {/* 书籍 */}
      <View className="book-pages" onClick={handlePageTap}>
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
      </View>

      {/* 页码 */}
      <View className="page-number">{currentPage + 1 + ' / ' + images.length}</View>

      {/* 目录 */}
      <View className={`bottom-bar ${showTopBar ? '' : 'none'}`}>
        <Text className="catalog-button" onClick={handleCatalogShowingUp}>
          目录
        </Text>
        <Text className="audio-button" onClick={playAudio}>
          音频
        </Text>
      </View>

      <AtFloatLayout
        isOpened={catalogVisible}
        title="目录"
        onClose={() => setCatalogVisible(false)}
        className=""
        style={{ height: "400px" }}
      >
        {/* <View className="book-preview-catalog">
        </View> */}
        <AtList>
          <AtListItem
            title='COPYRIGHT'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='INTRODUCTION'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='LIST OF ARTEFACTS'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER ONE THE JOURNEY'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER TWO POTIONS AND ALCHEMY'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER THREE HERBOLOGY'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER FOUR CHARMS'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER FIVE'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER FOUR CHARMS'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER FIVE'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER FOUR CHARMS'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER FIVE'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER FOUR CHARMS'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER FIVE'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER FOUR CHARMS'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
          <AtListItem
            title='CHAPTER FIVE'
            arrow='right'
            iconInfo={{ size: 15, value: 'list', }}
          />
        </AtList>
      </AtFloatLayout>
    </View>
  );
};

export default BookPreview;
