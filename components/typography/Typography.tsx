import React from 'react';
import {Text} from 'native-base';

interface ITypography {
  children: string;
}

export const H1: React.FC<ITypography> = ({children}) => {
  return <Text style={{fontSize: 22, fontWeight: '600'}}>{children}</Text>;
};

export const BodyText: React.FC<ITypography> = ({children}) => {
  return <Text style={{fontSize: 14}}>{children}</Text>;
};
