import { gql } from '@apollo/client';
import JourneyFragment, {
  IJourneyFragment,
} from '../fragments/JourneyFragment';
import PaginationFragment, {
  IPaginationFragment,
} from '../fragments/PaginationFragment';

const MyJourneys = gql`
  query MyJourneys($token: String!, $page: Int) {
    myJourneys(token: $token, page: $page) {
      errors
      pagination {
        ...PaginationFragment
      }
      journeys {
        ...JourneyFragment
      }
    }
  }
  ${PaginationFragment}
  ${JourneyFragment}
`;

export interface Result {
  myJourneys: {
    errors: string;
    pagination: IPaginationFragment;
    journeys: IJourneyFragment[];
  };
}

export default MyJourneys;
