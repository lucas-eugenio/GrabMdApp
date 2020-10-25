import { gql } from '@apollo/client';
import DoctorFragment from '../fragments/DoctorFragment';

const SignInDoctor = gql`
  mutation SignInDoctor($crm: String!, $password: String!) {
    signInDoctor(input: { crm: $crm, password: $password }) {
      errors
      doctor {
        ...DoctorFragment
      }
      token
    }
  }
  ${DoctorFragment}
`;

export default SignInDoctor;
