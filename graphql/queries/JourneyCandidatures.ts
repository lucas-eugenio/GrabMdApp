import { gql } from '@apollo/client';
import CandidatureFragment, {
  ICandidatureFragment,
} from '../fragments/CandidatureFragment';
import PaginationFragment, {
  IPaginationFragment,
} from '../fragments/PaginationFragment';

const JourneyCandidatures = gql`
  query JourneyCandidatures($token: String!, $journeyId: ID!, $page: Int) {
    journeyCandidatures(token: $token, journeyId: $journeyId, page: $page) {
      errors
      pagination {
        ...PaginationFragment
      }
      candidatures {
        ...CandidatureFragment
      }
    }
  }
  ${PaginationFragment}
  ${CandidatureFragment}
`;

export interface Variables {
  page: number;
  token?: string;
  journeyId: string;
}

export interface Result {
  journeyCandidatures: {
    errors: string;
    pagination: IPaginationFragment;
    candidatures: ICandidatureFragment[];
  };
}

export default JourneyCandidatures;
