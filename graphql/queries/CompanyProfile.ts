import { gql } from '@apollo/client';
import CompanyProfileFragment, {
  ICompanyProfileFragment,
} from '../fragments/CompanyProfileFragment';

const CompanyProfile = gql`
  query CompanyProfile($token: String!, $companyId: ID!) {
    companyProfile(token: $token, companyId: $companyId) {
      errors
      company {
        ...CompanyProfileFragment
      }
    }
  }
  ${CompanyProfileFragment}
`;

export interface Variables {
  token?: string;
  companyId: string;
}

export interface Result {
  companyProfile: {
    errors: string;
    company?: ICompanyProfileFragment;
  };
}

export default CompanyProfile;
