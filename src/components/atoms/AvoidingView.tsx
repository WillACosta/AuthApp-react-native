import React, { useEffect, useState } from 'react';
import styled from "styled-components/native";

import { useHeaderHeight } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform, StatusBar } from 'react-native';

import { COLORS, Typography } from '../../constants';

const AvoidingView: React.FC = ({ children }) => {
  const headerHeight = useHeaderHeight();
  console.log("headerHeight: " + headerHeight)
  console.log("StatusBar.currentHeight: " + StatusBar.currentHeight)

  const insets = useSafeAreaInsets();
  const [bottomPadding, setBottomPadding] = useState(insets.bottom)
  const [topPadding, setTopPadding] = useState(insets.top)

  useEffect(() => {
    setBottomPadding(insets.bottom)
    setTopPadding(insets.top)

    console.log("topPadding: " + topPadding)
    console.log("bottomPadding: " + bottomPadding)
  }, [insets.bottom, insets.top])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, padding: 30 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={ headerHeight + topPadding + (StatusBar.currentHeight || 0) }
    >
      {children}
    </KeyboardAvoidingView>
  );
}

export default AvoidingView;