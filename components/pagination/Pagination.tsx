import React from 'react';
import { Badge, Button, Text, View } from 'native-base';

interface IPagination {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
}

const Pagination: React.FC<IPagination> = ({
  page,
  pageCount,
  onPageChange,
  disabled = false,
}) => {
  const hasPrevious = page > 1;
  const hasNext = page < pageCount;

  const handlePreviousPress = () => {
    onPageChange(page - 1);
  };

  const handleNextPress = () => {
    onPageChange(page + 1);
  };

  return (
    <View
      style={{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
      }}>
      <Button
        success
        disabled={disabled || !hasPrevious}
        onPress={handlePreviousPress}
        style={{ marginRight: 8 }}>
        <Text>{'<<'}</Text>
      </Button>
      <Button success bordered>
        <Text>{`${page} / ${pageCount}`}</Text>
      </Button>
      <Button
        success
        disabled={disabled || !hasNext}
        onPress={handleNextPress}
        style={{ marginLeft: 8 }}>
        <Text>{'>>'}</Text>
      </Button>
    </View>
  );
};

export default Pagination;
