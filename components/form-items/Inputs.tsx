import React from 'react';
import { Input, Textarea } from 'native-base';
import { MaskService } from 'react-native-masked-text';

export const BaseInput = (
  setState: (text: string) => void,
): React.ReactElement => (
  <Input autoCapitalize="none" onChangeText={(text) => setState(text)} />
);

export const MaskedInput = (
  value: string,
  mask: string,
  setState: (text: string) => void,
): React.ReactElement => (
  <Input
    value={value}
    onChangeText={(text) => {
      setState(MaskService.toMask(mask, text));
    }}
  />
);

export const DateTimeInput = (
  value: string,
  setState: (text: string) => void,
): React.ReactElement => (
  <Input
    value={value}
    onChangeText={(text) => {
      setState(
        MaskService.toMask('datetime', text, {
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
      );
    }}
  />
);

export const TextAreaInput = (
  value: string,
  setState: (text: string) => void,
): React.ReactElement => (
  <Textarea
    value={value}
    rowSpan={3}
    underline
    bordered
    onChangeText={(text) => {
      setState(text);
    }}
  />
);

export const BaseReadOnlyInput = (value: string): React.ReactElement => (
  <Input value={value} editable={false} />
);

export const MaskedReadOnlyInput = (
  value: string,
  mask: string,
): React.ReactElement => (
  <Input value={MaskService.toMask(mask, value)} editable={false} />
);
