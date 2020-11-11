import { gql } from '@apollo/client';
import CompanyProfileFragment, {
  ICompanyProfileFragment,
} from '../fragments/CompanyProfileFragment';
import DoctorProfileFragment, {
  IDoctorProfileFragment,
} from '../fragments/DoctorProfileFragment';

const MyProfile = gql`
  query MyProfile($token: String!) {
    myProfile(token: $token) {
      errors
      doctor {
        ...DoctorProfileFragment
      }
      company {
        ...CompanyProfileFragment
      }
    }
  }
  ${CompanyProfileFragment}
  ${DoctorProfileFragment}
`;

export interface Variables {
  token?: string;
}

export interface Result {
  myProfile: {
    errors: string;
    company?: ICompanyProfileFragment;
    doctor?: IDoctorProfileFragment;
  };
}

export default MyProfile;
