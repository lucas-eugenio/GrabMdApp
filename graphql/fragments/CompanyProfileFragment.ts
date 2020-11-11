import { gql } from '@apollo/client';

const CompanyProfileFragment = gql`
  fragment CompanyProfileFragment on Company {
    id
    name
    address
    cnpj
    description
    email
    phone
  }
`;

export interface ICompanyProfileFragment {
  address: string;
  cnpj: string;
  description: string;
  email: string;
  id: string;
  name: string;
  phone: string;
}

export default CompanyProfileFragment;
