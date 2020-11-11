import React, { Fragment } from 'react';
import { Item, Label, View } from 'native-base';
import Colors from '../../Colors';
import {
  BaseInput,
  BaseReadOnlyInput,
  TextAreaInput,
  TextAreaReadOnlyInput,
} from './Inputs';

export const FormItem = (
  name: string,
  setState: (text: string) => void,
): React.ReactElement => (
  <Item floatingLabel style={{ marginTop: 24 }}>
    <Label style={{ color: Colors.success, fontWeight: '600' }}>{name}</Label>
    {BaseInput(setState)}
  </Item>
);

export const FormItemWithoutInput = (
  name: string,
  input: React.ReactElement,
) => (
  <Item floatingLabel style={{ marginTop: 24 }}>
    <Label style={{ color: Colors.success, fontWeight: '600' }}>{name}</Label>
    {input}
  </Item>
);

export const ReadOnlyFormItem = (
  name: string,
  value: string,
): React.ReactElement => (
  <Item floatingLabel style={{ marginTop: 24 }}>
    <Label style={{ color: Colors.success, fontWeight: '600' }}>{name}</Label>
    {BaseReadOnlyInput(value)}
  </Item>
);

export const ReadOnlyFormItemWithoutInput = (
  name: string,
  input: React.ReactElement,
): React.ReactElement => (
  <Item floatingLabel style={{ marginTop: 24 }}>
    <Label style={{ color: Colors.success, fontWeight: '600' }}>{name}</Label>
    {input}
  </Item>
);

export const TextAreaFormItem = (
  name: string,
  value: string,
  setState: (text: string) => void,
): React.ReactElement => (
  <View style={{ marginTop: 24, paddingLeft: 16 }}>
    <Label style={{ color: Colors.success, fontWeight: '600' }}>{name}</Label>
    {TextAreaInput(value, setState)}
  </View>
);

export const ReadOnlyTextAreaFormItem = (
  name: string,
  value: string,
): React.ReactElement => (
  <View style={{ marginTop: 24, paddingLeft: 16 }}>
    <Label style={{ color: Colors.success, fontWeight: '600' }}>{name}</Label>
    {TextAreaReadOnlyInput(value)}
  </View>
);
