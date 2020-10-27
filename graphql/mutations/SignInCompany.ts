import { gql } from '@apollo/client';

const SignInCompany = gql`
  mutation SignInCompany($cnpj: String!, $password: String!) {
    signInCompany(input: { cnpj: $cnpj, password: $password }) {
      errors
      token
    }
  }
`;

export interface Result {
  signInCompany: {
    errors: string;
    token: string;
  };
}

export default SignInCompany;
