import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

import { createRandomUser, generateThreads } from "../../utils/generate-dummy-data";
// const user = createRandomUser();
// console.log(JSON.stringify(user, null, 2));

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tabBarActiveColor = colorScheme === "light" ? "#000" : "#fff";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tabBarActiveColor,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
    </Tabs>
  );
}
