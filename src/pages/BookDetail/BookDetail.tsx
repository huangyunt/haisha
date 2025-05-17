import React, { useEffect } from "react";
import { View, Text } from "@tarojs/components";
import { useLaunch, useLoad, useRouter } from "@tarojs/taro";
import BookPreview from "./Components/BookPreview/BookPreview";

export default function BookDetail() {
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
