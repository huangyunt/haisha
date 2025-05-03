import React, { useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import BookPreview from "./Components/BookPreview/BookPreview";

export default function BookDetail() {
  useEffect(() => {
    console.log("book");
  }, []);

  useLoad(() => {
    console.log("Book Detail Page loaded.");
  });

  return (
    <View>
      <BookPreview />
    </View>
  );
}
