import { gql } from '@apollo/client';

const DoctorFragment = gql`
  fragment DoctorFragment on Doctor {
    id
    name
  }
`;

export default DoctorFragment;
