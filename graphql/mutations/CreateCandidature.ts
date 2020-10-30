import { gql } from '@apollo/client';

const CreateCandidature = gql`
  mutation CreateCandidature($token: String!, $journeyId: ID!) {
    createCandidature(input: { token: $token, journeyId: $journeyId }) {
      errors
    }
  }
`;

export interface Result {
  createCandidature: {
    errors: string;
  };
}

export default CreateCandidature;
