import { gql } from '@apollo/client';

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
    }
  }
`;

export interface Result {
  createCompany: {
    errors: string;
  };
}

export default CreateCompany;
