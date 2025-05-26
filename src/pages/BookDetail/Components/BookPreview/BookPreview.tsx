import React, { useState, useEffect, useRef } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { AtFloatLayout, AtList, AtListItem, AtIcon } from "taro-ui"
import { Swiper, SwiperItem, Image, View, Text } from "@tarojs/components";
import { catalogLists } from "./constants/catalogList";
import { allAudioList } from "./constants/audioList";
import { images } from "./constants/images";

// import "@taroify/core/icon/style"

import "./BookPreview.scss";
const green = "rgb(66, 134, 135)"
const gray = 'rgb(67, 83, 108)'

const decimalToPercentage = (decimal) => {
  return (decimal * 100).toFixed(2) + '%';
}

const BookPreview: React.FC = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [catalogList, setCatalogList] = useState([])
  const [audioList, setAudioList] = useState({})
  const [currentPage, setCurrentPage] = useState(0);
  const [showTopBar, setShowTopBar] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [catalogVisible, setCatalogVisible] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // 当前是否有音频正在播放
  const audioContextRef = useRef<Taro.InnerAudioContext>(Taro.createInnerAudioContext())
  const router = useRouter();

  useEffect(() => {
    const id = router.params?.id || "1";
    setImageUrls(images[id])
    setCatalogList(catalogLists[id])
    setAudioList(allAudioList[id])

    return () => {
      audioContextRef.current.destroy()
    }
  }, []);

  useEffect(() => {
  }, [currentPage])

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
  };


  const handlePageTurning = (page) => {
    console.log("page: ", page)
    setCurrentPage(page)
  }

  const playAudio = (url: string) => {
    // 关闭之前播放的音频
    stopPlayingAudio();
    // IOS下无法播放音频问题
    Taro.setInnerAudioOption({ obeyMuteSwitch: false })
    audioContextRef.current.src = url
    audioContextRef.current.onPlay(() => {
      console.log('Start playback')
    })
    audioContextRef.current.onError((res) => {
      console.log('Audio play error:', res.errMsg);
      console.log('Error code:', res.errCode);
      switch (res.errCode) {
        case -1:
          console.log('网络错误，请检查网络连接');
          break;
        case -2:
          console.log('文件格式错误，请检查音频文件');
          break;
        case -3:
          console.log('解码错误，请检查音频文件');
          break;
        default:
          console.log('未知错误，请联系开发者');
      }
    });
    audioContextRef.current.play();
    setIsAudioPlaying(true);
  }

  const stopPlayingAudio = () => {
    audioContextRef.current.stop()
    setIsAudioPlaying(false)
  }

  return (
    <View className="haisha-book-preview-container">

      {/* 顶栏 */}
      <View className={`top-bar ${showTopBar ? 'height' : ''}`}>
        {/* <View className="left-container" onClick={goBack}>
          <AtIcon value='chevron-left' size='25' />
          <Text className="back-button">
            返回
          </Text>
        </View> */}
        {/* <View className="right-container"> */}
        <View className={showTopBar ? '' : 'none'}>
          <Text className='title'>{`CASA自然拼读 ${router.params?.id || "1"}`}</Text>
        </View>
      </View>

      {/* 书籍 */}
      <View className="book-pages" onClick={handlePageTap}>
        <Swiper
          duration={300}
          current={currentPage}
          onChange={(e) => setCurrentPage(e.detail.current)}
          style={{ height: "500px", marginBottom: "15px" }}
          className="book-container"
          vertical
          circular
        >
          {imageUrls.map((url, index) => (
            <SwiperItem key={index}>
              <View className="book-page-container">
                {
                  <View className={`pause ${isAudioPlaying ? '' : 'hide'}`} onClick={() => stopPlayingAudio()}>
                    <AtIcon value='pause' color="red" size='20' />
                    <Text style={{ color: 'red' }}>播放中..</Text>
                  </View>
                }
                <BookImage url={url} />
                {/* [(x - 653)/469, (y - 167)/606 */}
                <BookAudioTag audioList={audioList} currentPage={currentPage} playAudio={playAudio} />
              </View>
            </SwiperItem>
          ))}
        </Swiper>
      </View>

      {/* 
        * 页码 
        * 封面和目录页不需要展示页码，且页数需要减去封面和目录页
      */}
      {currentPage > 1 ? <View className="page-number">{(currentPage - 1) + ' / ' + (imageUrls.length - 2)}</View> : null}

      {/* 底栏 */}
      <View className={`bottom-bar ${showTopBar ? 'height' : ''}`} onClick={handleCatalogShowingUp}>
        {/* <View className={`flex-container`} onClick={handleCatalogShowingUp}>
          <AtIcon className='menu' value='menu' size='20' color={gray} />
          <Text className="catalog-button">
            目录
          </Text>
        </View> */}
        <View className={`flex-container ${showTopBar ? '' : 'none'}`}>
          <AtIcon className='menu' value='menu' size='20' color={gray} />
          <Text className="catalog-button">
            目录
          </Text>
        </View>
        {/* <View className={`flex-container ${showTopBar ? '' : 'none'}`} onClick={handleAudioListShowingUp}>
          <AtIcon className='file-audio' value='file-audio' size='20' color={gray} />
          <Text className="audio-button">
            音频
          </Text>
        </View> */}
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
            catalogList.map(({ name, page }) =>
              <AtListItem
                title={name}
                arrow='right'
                iconInfo={{ size: 15, value: 'list', color: green }}
                onClick={() => handlePageTurning(page)}
              />
            )
          }
        </AtList>
      </AtFloatLayout>

    </View>
  );
};

export default BookPreview;



export const BookImage: React.FC<any> = React.memo(({ url }) => {
  console.log("book imgae rerender")
  return (
    <Image src={url} mode="widthFix" className="book-page" />
  )
})

export const BookAudioTag: React.FC<any> = React.memo(({ audioList, currentPage, playAudio }) => {
  return (
    <>
      {/* [(x - 653)/469, (y - 167)/606 */}
      {
        audioList[currentPage + 2] && audioList[currentPage + 2].map((audio) => {
          const { offset = [], audioContext, url } = audio as any
          const [x = 0, y = 0] = offset
          const left = decimalToPercentage((x - 653) / 469);
          const top = decimalToPercentage((y - 167) / 606);
          return <View
            className="float-rect"
            style={{
              position: 'absolute',
              left,
              top,
              width: "30px",
              height: "30px",
              // backgroundColor: "blue",
              // opacity: 0
            }}
            onClick={(e) => {
              e.stopPropagation();
              playAudio(url)
              // triggleAudioStatus(index, status)
            }}
          >
            <AtIcon value='volume-plus' color="red" size='25' />
            {/* <Image
          // style='width: 300px;height: 100px;background: #fff;'
          src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
        /> */}
          </View>
        })
      }</>
  )
}
)