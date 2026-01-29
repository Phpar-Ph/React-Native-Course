import { StyleSheet, ImageSourcePropType } from "react-native";
import React from "react";
import { Image } from "expo-image";

type Props = {
  imgSource: ImageSourcePropType;
};

const imageViewer = ({ imgSource }: Props) => {
  return <Image source={imgSource} style={styles.image} />;
};

export default imageViewer;

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
