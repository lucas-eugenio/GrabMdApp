import { gql } from '@apollo/client';

const JourneyFragment = gql`
  fragment JourneyFragment on Journey {
    address
    company {
      id
      name
      cnpj
    }
    date
    doctor {
      name
      crm
    }
    hireEntity
    id
    name
    paymentDate
    paymentMethod
    providesPpe
    wage
  }
`;

export interface IJourneyFragment {
  address: string;
  company: {
    id: string;
    name: string;
    cnpj: string;
  };
  date: string;
  doctor?: {
    name: string;
    crm: string;
  };
  hireEntity: string;
  id: string;
  name: string;
  paymentDate: string;
  paymentMethod: string;
  providesPpe: boolean;
  wage: number;
}

export default JourneyFragment;
