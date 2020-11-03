import { gql } from '@apollo/client';
import CandidatureFragment, {
  ICandidatureFragment,
} from '../fragments/CandidatureFragment';
import PaginationFragment, {
  IPaginationFragment,
} from '../fragments/PaginationFragment';

const MyCandidatures = gql`
  query MyCandidatures($token: String!, $page: Int) {
    myCandidatures(token: $token, page: $page) {
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

export interface Result {
  myCandidatures: {
    errors: string;
    pagination: IPaginationFragment;
    candidatures: ICandidatureFragment[];
  };
}

export default MyCandidatures;
