import { Text, View } from "react-native";
import {PieChart} from "react-native-gifted-charts"


export default function Index() {
    const pieData = [
        {value: 54, color: '#177AD5', text: '54%'},
        {value: 40, color: '#79D2DE', text: '30%'},
        {value: 20, color: '#ED6665', text: '26%'},
    ];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>THis is DashBoard </Text>
      <PieChart
            showText
            textColor="black"
            radius={150}
            textSize={20}
            showTextBackground
            textBackgroundRadius={26}
            data={pieData}
            />
    </View>
  );
}
