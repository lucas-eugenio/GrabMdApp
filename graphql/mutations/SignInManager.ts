import { gql } from '@apollo/client';

const SignInManager = gql`
  mutation SignInManager($cpf: String!, $password: String!) {
    signInManager(input: { cpf: $cpf, password: $password }) {
      errors
      token
    }
  }
`;

export interface Result {
  signInManager: {
    errors: string;
    token: string;
  };
}

export default SignInManager;
