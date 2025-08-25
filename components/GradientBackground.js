import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

export default function GradientBackground() {
  return (
    <Svg style={StyleSheet.absoluteFill} width="100%" height="100%">
      <Defs>
        <RadialGradient id="bg" cx="50%" cy="0%" r="80%">
          <Stop offset="0%" stopColor="#2563EB" stopOpacity="0.95" />
          <Stop offset="45%" stopColor="#1E3A8A" stopOpacity="0.55" />
          <Stop offset="100%" stopColor="#000000" stopOpacity="1" />
        </RadialGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#bg)" />
    </Svg>
  );
}
