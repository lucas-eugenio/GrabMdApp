import React from 'react';
import { Header as NBHeader, Text, Thumbnail, View } from 'native-base';
import Colors from '../../Colors';

const Header: React.FC = () => {
  return (
    <NBHeader style={{ height: 56 }}>
      <View
        style={{
          backgroundColor: Colors.success,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Thumbnail
          square
          source={require('../../images/GrabMDIncomplete.png')}
        />
        <Text
          style={{
            fontSize: 24,
            marginTop: 14,
            color: Colors.white,
            fontWeight: '600',
          }}>
          GrabMD
        </Text>
      </View>
    </NBHeader>
  );
};

export default Header;
