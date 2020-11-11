import { gql } from '@apollo/client';
import DoctorProfileFragment, {
  IDoctorProfileFragment,
} from '../fragments/DoctorProfileFragment';

const DoctorProfile = gql`
  query DoctorProfile($token: String!, $doctorId: ID!) {
    doctorProfile(token: $token, doctorId: $doctorId) {
      errors
      doctor {
        ...DoctorProfileFragment
      }
    }
  }
  ${DoctorProfileFragment}
`;

export interface Variables {
  token?: string;
  doctorId: string;
}

export interface Result {
  doctorProfile: {
    errors: string;
    doctor?: IDoctorProfileFragment;
  };
}

export default DoctorProfile;
