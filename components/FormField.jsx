import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  handleChangeText,
  placeholder,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-500 font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-slate-500 items-center flex-row">
        <TextInput
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          className="flex-1 text-black font-psemibold text-base"
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eyeHide : icons.eye}
              className="w-6 h-6 resize"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
