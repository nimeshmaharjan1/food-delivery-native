import { View, Text } from "react-native";
import React from "react";
import { styled, useColorScheme } from "nativewind";
import { Pressable } from "react-native";

const StyledPressable = styled(Pressable);
const StyledText = styled(Text);

const MainLayout = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <StyledPressable onPress={toggleColorScheme} className="flex-1 items-center justify-center dark:bg-slate-800">
      <StyledText selectable={false} className="dark:text-white">
        {`Try clicking me! ${colorScheme === "dark" ? "🌙" : "🌞"}`}
      </StyledText>
    </StyledPressable>
  );
};

export default MainLayout;
