import { gql } from '@apollo/client';

const SignInDoctor = gql`
  mutation SignInDoctor($crm: String!, $password: String!) {
    signInDoctor(input: { crm: $crm, password: $password }) {
      errors
      token
    }
  }
`;

export interface Result {
  errors: string;
  token: string;
}

export default SignInDoctor;
