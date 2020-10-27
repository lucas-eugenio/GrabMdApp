import { gql } from '@apollo/client';

const CreateManager = gql`
  mutation CreateManager(
    $token: String!
    $name: String!
    $email: String!
    $cpf: String!
    $password: String!
  ) {
    createManager(
      input: {
        token: $token
        name: $name
        email: $email
        cpf: $cpf
        password: $password
      }
    ) {
      errors
    }
  }
`;

export interface Result {
  createManager: {
    errors: string;
  };
}

export default CreateManager;
