import { gql } from '@apollo/client';
import CompanyFragment from '../fragments/CompanyFragment';

const CreateCompany = gql`
  mutation CreateCompany(
    $name: String!
    $email: String!
    $cnpj: String!
    $password: String!
  ) {
    createCompany(
      input: { name: $name, email: $email, cnpj: $cnpj, password: $password }
    ) {
      errors
      company {
        ...CompanyFragment
      }
    }
  }
  ${CompanyFragment}
`;

export default CreateCompany;
