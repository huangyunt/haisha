import React, { useState, useEffect, useRef } from "react";
import { AtFloatLayout, AtList, AtListItem, AtIcon } from "taro-ui"
import { Swiper, SwiperItem, Image, View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { catalogList, images } from "./constant";
import { Book } from "./Book";

import "./BookPreview.scss";

const green = "rgb(66, 134, 135)"
const gray = 'rgb(67, 83, 108)'

const BookPreview: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>(images);
  const [currentPage, setCurrentPage] = useState(0);
  const [showTopBar, setShowTopBar] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [catalogVisible, setCatalogVisible] = useState(false);
  const [audioListVisible, setAudioListVisible] = useState(false);

  // const innerAudioContext = Taro.createInnerAudioContext()
  const innerAudioContext = useRef(Taro.createInnerAudioContext())

  useEffect(() => {
    // const params = Taro.getCurrentInstance()?.router.params;
    // if (params && params.imageUrls) {
    //     setImageUrls(JSON.parse(params.imageUrls));
    // }
    // innerAudioContext.autoplay = true
    innerAudioContext.current.src = 'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track23.mp3?sign=b2772cf1f0087d3537fc8de2f481df10&t=1746425209'
    innerAudioContext.current.onPlay(() => {
      console.log('Start playback')
    })
    innerAudioContext.current.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
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
    // setShowTopBar(false)
    // setShowBottomBar(false)
  };

  // 查看音频列表
  const handleAudioListShowingUp = () => {
    setAudioListVisible(true)
    // setShowTopBar(false)
    // setShowBottomBar(false)
  };


  const playAudio = () => {
    console.log("start audio")
    innerAudioContext.current.play()
  };

  return (
    <View className="haisha-book-preview-container">

      {/* 顶栏 */}
      {/* <View className={`top-bar ${showTopBar ? '' : 'none'}`}>
        <View className="left-container" onClick={goBack}>
          <AtIcon value='chevron-left' size='25' />
          <Text className="back-button">
            返回
          </Text>
        </View>
        <View className='components-page'>
        </View>
      </View> */}

      {/* 书籍 */}
      <View className="book-pages" onClick={handlePageTap}>
        <Swiper
          current={currentPage}
          onChange={(e) => setCurrentPage(e.detail.current)}
          style={{ height: "590px" }}
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

      {/* 底栏 */}
      <View className={`bottom-bar ${showTopBar ? 'height' : ''}`}>
        <View className={`flex-container ${showTopBar ? '' : 'none'}`} onClick={handleCatalogShowingUp}>
          <AtIcon className='menu' value='menu' size='20' color={gray} />
          <Text className="catalog-button">
            目录
          </Text>
        </View>
        <View className={`flex-container ${showTopBar ? '' : 'none'}`} onClick={handleAudioListShowingUp}>
          <AtIcon className='file-audio' value='file-audio' size='20' color={gray} />
          <Text className="audio-button">
            音频
          </Text>
        </View>
      </View>

      {/* 书籍目录 */}
      <AtFloatLayout
        isOpened={catalogVisible}
        title="目录"
        // customStyle={}
        onClose={() => setCatalogVisible(false)}
        className=""
        style={{ height: "400px" }}
      >
        {/* <View className="book-preview-catalog">
        </View> */}
        <AtList>
          {
            catalogList.map(name =>
              <AtListItem
                title={name}
                arrow='right'
                iconInfo={{ size: 15, value: 'list', color: green }}
              />
            )
          }
        </AtList>
      </AtFloatLayout>

      {/* 音频目录 */}
      <AtFloatLayout
        isOpened={audioListVisible}
        title="音频"
        onClose={() => setAudioListVisible(false)}
        style={{ height: "400px" }}
      >
        <AtList>
          <AtListItem
            title="音频1"
            // arrow='right'
            iconInfo={{ size: 15, value: 'play', color: 'rgb(67, 83, 108)' }}
            onClick={playAudio}
          />
          <AtListItem
            title="音频2"
            // arrow='right'
            iconInfo={{ size: 15, value: 'play', color: 'rgb(67, 83, 108)' }}
            onClick={playAudio}
          />
          <AtListItem
            title="音频3"
            // arrow='right'
            iconInfo={{ size: 15, value: 'play', color: 'rgb(67, 83, 108)' }}
            onClick={playAudio}
          />
        </AtList>
      </AtFloatLayout>

    </View>
  );
};

export default BookPreview;
