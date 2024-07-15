import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

import { icons } from "../constants";

interface Props {
  value?: string;
  placeholder?: string;
  keyboardType?: string;
  handleChangeText?: (e: any) => void;
  otherStyles?: string;
}

const SearchInput = ({
  value,
  placeholder,
  handleChangeText,
  keyboardType,
  otherStyles,
  ...rest
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
