import { gql } from '@apollo/client';

const CreateDoctor = gql`
  mutation CreateDoctor(
    $name: String!
    $email: String!
    $crm: String!
    $password: String!
  ) {
    createDoctor(
      input: { name: $name, email: $email, crm: $crm, password: $password }
    ) {
      errors
    }
  }
`;

export interface Result {
  createDoctor: {
    errors: string;
  };
}

export default CreateDoctor;
