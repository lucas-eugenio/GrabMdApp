import React from 'react';
import { Item, Label } from 'native-base';
import Colors from '../../Colors';
import { BaseInput, BaseReadOnlyInput } from './Inputs';

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
