import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const ForgotPassword = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View className="w-full justify-center min-h-[40vh] px-4 my-6">
          <Text className="text-3xl text-black text-semibold mt-10 font-psemibold">
            Forgot Password
          </Text>
          <Text className="text-lg text-black text-md mt-4 ">
            Enter your email to reset your password
          </Text>
          <FormField
            title="Email"
            placeholder={"info@example.com"}
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <CustomButton
            title="Reset Password"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
