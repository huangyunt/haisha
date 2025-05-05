import React, { useState, useEffect } from "react";
import { Swiper, SwiperItem, Image, View, Text } from "@tarojs/components";
import { images } from "./constant";

export const Book = React.memo(() => {
    const [imageUrls, setImageUrls] = useState<string[]>(images);
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <View className="book-pages">
            <Swiper
                current={currentPage}
                onChange={(e) => setCurrentPage(e.detail.current)}
            // style={{ height: "100vh" }}
            >
                {imageUrls.map((url, index) => (
                    <SwiperItem key={index}>
                        <Image src={url} mode="widthFix" className="book-page" />
                    </SwiperItem>
                ))}
            </Swiper>
        </View>
    )
})
