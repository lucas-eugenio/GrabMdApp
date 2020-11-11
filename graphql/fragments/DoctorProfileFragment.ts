import { gql } from '@apollo/client';

const DoctorProfileFragment = gql`
  fragment DoctorProfileFragment on Doctor {
    crm
    email
    experiences
    formation
    id
    name
    phone
  }
`;

export interface IDoctorProfileFragment {
  crm: string;
  email: string;
  experiences: string;
  formation: string;
  id: string;
  name: string;
  phone: string;
}

export default DoctorProfileFragment;
