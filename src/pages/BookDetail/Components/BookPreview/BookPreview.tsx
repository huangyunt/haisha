import React, { useState, useEffect, useRef } from "react";
import Taro from "@tarojs/taro";
import { AtFloatLayout, AtList, AtListItem, AtIcon } from "taro-ui"
import { Swiper, SwiperItem, Image, View, Text } from "@tarojs/components";
import { audioList, catalogList, images } from "./constant";

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
  const [audioPlayList, setAudioPlayList] = useState<Taro.InnerAudioContext[]>([])
  const [audioListPlayStatus, setAudioListPlayStatus] = useState<Boolean[]>([])
  const audioListPlayStatusRef = useRef<Boolean[]>([])

  useEffect(() => {
    // const params = Taro.getCurrentInstance()?.router.params;
    // if (params && params.imageUrls) {
    //     setImageUrls(JSON.parse(params.imageUrls));
    // }
    // innerAudioContext.autoplay = true
  }, []);

  useEffect(() => {
    // 所有音频全部暂停
    audioPlayList.forEach(audio => {
      audio.stop();
    });

    const list = audioList[currentPage] && audioList[currentPage].map((audioURL => {
      const audioContext = Taro.createInnerAudioContext()
      audioContext.src = audioURL
      audioContext.onPlay(() => {
        console.log('Start playback')
      })
      audioContext.onError((res) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      })
      return audioContext
    })
    ) || []

    setAudioPlayList(list)
    setAudioListPlayStatus(Array(list.length).fill(false))
    audioListPlayStatusRef.current = Array(list.length).fill(false)

  }, [currentPage])


  useEffect(() => {
    console.log(audioListPlayStatus)
  }, [JSON.stringify(audioListPlayStatus)])

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


  const triggleAudioStatus = (index, status) => {
    console.log("start audio")
    // 找到哪一条音频，判断是否播放中，决定是播放还是暂停
    if (status) {
      audioPlayList[index] && audioPlayList[index].stop();
    } else {
      // 其他音频全部暂停
      audioPlayList.forEach(audio => {
        audio.stop();
      });
      audioPlayList[index] && audioPlayList[index].play();
    }
    // 状态改变
    const list = [...audioListPlayStatusRef.current]
    list.splice(index, 1, !status)
    setAudioListPlayStatus(list)
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
        onClose={() => setCatalogVisible(false)}
        style={{ height: "800px" }}
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
          {audioListPlayStatus.map((status, index) =>
            !status
              ?
              // 未播放
              <AtListItem
                title={"音频" + (index + 1)}
                iconInfo={{ size: 15, value: 'play', color: 'rgb(67, 83, 108)' }}
                onClick={() => triggleAudioStatus(index, status)}
              />
              :
              // 正在播放
              <AtListItem
                title={"音频" + (index + 1)}
                iconInfo={{ size: 15, value: 'pause', color: 'rgb(67, 83, 108)' }}
                onClick={() => triggleAudioStatus(index, status)}
              />
          )}
        </AtList>
      </AtFloatLayout>

    </View>
  );
};

export default BookPreview;
