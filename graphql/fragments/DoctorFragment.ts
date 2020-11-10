import { gql } from '@apollo/client';

const DoctorFragment = gql`
  fragment DoctorFragment on Doctor {
    id
    name
    crm
    email
  }
`;

export interface IDoctorFragment {
  id: string;
  name: string;
  crm: string;
  email: string;
}

export default DoctorFragment;
