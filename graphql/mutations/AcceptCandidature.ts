import { gql } from '@apollo/client';

const AcceptCandidature = gql`
  mutation AcceptCandidatur($token: String!, $candidatureId: ID!) {
    acceptCandidature(input: { token: $token, candidatureId: $candidatureId }) {
      errors
    }
  }
`;

export interface Variables {
  token?: string;
  candidatureId: string;
}

export interface Result {
  acceptCandidature: {
    errors: string;
  };
}

export default AcceptCandidature;
