import { gql } from '@apollo/client';

const UpdateCompanyProfile = gql`
  mutation UpdateCompanyProfile(
    $token: String!
    $description: String
    $address: String
    $phone: String
  ) {
    updateCompanyProfile(
      input: {
        token: $token
        description: $description
        address: $address
        phone: $phone
      }
    ) {
      errors
    }
  }
`;

export interface Variables {
  token?: string;
  description: string;
  address: string;
  phone: string;
}

export interface Result {
  updateCompanyProfile: {
    errors: string;
  };
}

export default UpdateCompanyProfile;
