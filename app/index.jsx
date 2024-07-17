import { Redirect } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useGlobalContext } from "../context/GlobalProvider";
import { Link } from "expo-router";

const Welcome = () => {
  const { isLogged, setIsLogged } = useGlobalContext();

  if (isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-violet-600">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Text className="text-white font-bold text-2xl">X</Text>
          <Link href={"./sign-up"}>
            <Text className="text-white font-bold text-2xl">Sign Up</Text>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
