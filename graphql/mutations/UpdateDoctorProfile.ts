import { gql } from '@apollo/client';

const UpdateDoctorProfile = gql`
  mutation UpdateDoctorProfile(
    $token: String!
    $phone: String
    $formation: String
    $experiences: String
  ) {
    updateDoctorProfile(
      input: {
        token: $token
        formation: $formation
        experiences: $experiences
        phone: $phone
      }
    ) {
      errors
    }
  }
`;

export interface Variables {
  token?: string;
  phone?: string;
  formation?: string;
  experiences?: string;
}

export interface Result {
  updateDoctorProfile: {
    errors: string;
  };
}

export default UpdateDoctorProfile;
