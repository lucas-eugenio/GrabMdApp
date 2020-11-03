import { Badge, Text } from 'native-base';
import React, { Fragment } from 'react';
import { translateStatus } from '../../utils/translate';

interface IStatusBadger {
  status: string;
}

const StatusBadger: React.FC<IStatusBadger> = ({ status }) => {
  const text = translateStatus(status);

  const BadgeText = (): React.ReactElement => (
    <Text style={{ fontWeight: '600' }}>{text}</Text>
  );

  switch (status) {
    case 'IN_PROGRESS':
      return <Badge info>{BadgeText()}</Badge>;
    case 'ACCEPTED':
      return <Badge success>{BadgeText()}</Badge>;
    case 'REFUSED':
      return <Badge danger>{BadgeText()}</Badge>;
    default:
      return <Fragment />;
  }
};

export default StatusBadger;
