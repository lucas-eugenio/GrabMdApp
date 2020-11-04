import React from 'react';
import { View } from 'native-base';
import { Image } from 'react-native';

const LARGE_ICON_SIZE = 200;

export const LargeIcon: React.FC = () => (
  <View style={{ marginTop: 40 }}>
    <Image
      source={require('../../images/GrabMDComplete.png')}
      style={{
        alignSelf: 'center',
        height: LARGE_ICON_SIZE,
        width: LARGE_ICON_SIZE,
      }}
    />
  </View>
);
