import { useEffect } from "react";
import { useLaunch, useLoad, useRouter, useShareAppMessage } from "@tarojs/taro";
import BookPreview from "./Components/BookPreview/BookPreview";
import { sharedImage } from "@/constant";

export default function BookDetail() {
  const router = useRouter();

  useShareAppMessage(() => {
    return {
      title: '海沙牛娃电子书', // 转发标题
      path: 'pages/BookDetail/BookDetail?id=' + (router.params?.id || "1"), // 转发路径，可以携带参数
      imageUrl: sharedImage, // 自定义分享图片
      success: function (res) {
        // 转发成功
        console.log('转发成功', res);
      },
      fail: function (res) {
        // 转发失败
        console.log('转发失败', res);
      }
    }
  })

  useEffect(() => {
    console.log("book");
  }, []);

  useLoad((params) => {
    console.log("Book Detail Page loaded: ", params);

  });
  useLaunch((params) => {
    console.log("Book Detail Page launch: ", params);
  });

  return (
    <BookPreview />
  );
}
