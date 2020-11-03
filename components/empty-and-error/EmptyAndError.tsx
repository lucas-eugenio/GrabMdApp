import React from 'react';
import { Card, CardItem, Text, View } from 'native-base';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface IEmptyAndError {
  isLoading: boolean;
  hasError: boolean;
  emptyMessage: string;
}

const EmptyAndError: React.FC<IEmptyAndError> = ({
  isLoading,
  hasError,
  emptyMessage,
}) => {
  return (
    <View>
      {!isLoading && (
        <Card>
          <CardItem style={{ justifyContent: 'center' }}>
            <View>
              {hasError ? (
                <Text
                  style={{
                    color: Colors.danger,
                    fontWeight: '600',
                  }}>
                  Ops! Algo deu errado.
                </Text>
              ) : (
                <Text
                  style={{
                    color: Colors.success,
                    fontWeight: '600',
                  }}>
                  {emptyMessage}
                </Text>
              )}
            </View>
          </CardItem>
        </Card>
      )}
    </View>
  );
};

export default EmptyAndError;
