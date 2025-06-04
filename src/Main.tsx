import { Canvas, DiscretePathEffect, Path } from "@shopify/react-native-skia";
import { SafeAreaView } from "react-native";

const logo =
  "M122 61C88.2 61 61 88.2 61 122v152c0 8.36 6.84 15.2 15.2 15.2h212.8c8.36 0 15.2-6.84 15.2-15.2v-197c0-16.72-13.48-30.4-30.4-30.4h-60.8V61H122zm15.2 30.4h45.6v45.6h-45.6V91.4z";

const Main = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <Path path={logo} color="#30B7BC">
          <DiscretePathEffect length={10} deviation={2} />
        </Path>
      </Canvas>
    </SafeAreaView>
  );
};

export { Main };
