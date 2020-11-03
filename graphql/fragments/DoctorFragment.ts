import { gql } from '@apollo/client';

const DoctorFragment = gql`
  fragment DoctorFragment on Doctor {
    id
    name
    crm
  }
`;

export interface IDoctorFragment {
  id: string;
  name: string;
  crm: string;
}

export default DoctorFragment;
