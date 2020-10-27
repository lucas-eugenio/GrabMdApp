import { gql } from '@apollo/client';
import ManagerFragment, {
  IManagerFragment,
} from '../fragments/ManagerFragment';
import PaginationFragment, {
  IPaginationFragment,
} from '../fragments/PaginationFragment';

const MyManagers = gql`
  query MyManagers($token: String!, $page: Int) {
    myManagers(token: $token, page: $page) {
      errors
      pagination {
        ...PaginationFragment
      }
      managers {
        ...ManagerFragment
      }
    }
  }
  ${PaginationFragment}
  ${ManagerFragment}
`;

export interface Result {
  myManagers: {
    errors: string;
    pagination: IPaginationFragment;
    managers: IManagerFragment[];
  };
}

export default MyManagers;
