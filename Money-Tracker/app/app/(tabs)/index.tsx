import { View, StyleSheet } from "react-native";
// import {PieChart} from "react-native-gifted-charts"
import ImageViewer from "../components/imageViewer";
import defaultImage from "../../assets/background.jpg";
import Button from "../components/Button";
import * as ImagePicker from "expo-image-picker";

export default function Index() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={defaultImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a Photo" />
        <Button label="Use this Photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 20,
  },
});
