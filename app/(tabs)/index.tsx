import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useContext, useRef } from "react";
import LottieView from "lottie-react-native";

import { View } from "../../components/Themed";
import { ThreadsContext } from "../../context/thread-context";
import ThreadsItem from "../../components/ThreadsItem";

export default function TabOneScreen() {
  const animationRef = useRef<LottieView>(null);
  const threads = useContext(ThreadsContext);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef.current?.play();
            }}
            tintColor={"transparent"}
          />
        }
      >
        <View style={{ alignSelf: "center", backgroundColor: "transparent" }}>
          <LottieView
            ref={animationRef}
            source={require("../../lottie-animations/threads.json")}
            loop={false}
            autoPlay={true}
            style={{ width: 90, height: 90 }}
          />
        </View>
        {threads.map((thread) => (
          <ThreadsItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
