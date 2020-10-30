import { gql } from '@apollo/client';
import JourneyFragment, {
  IJourneyFragment,
} from '../fragments/JourneyFragment';
import PaginationFragment, {
  IPaginationFragment,
} from '../fragments/PaginationFragment';

const FindJourneys = gql`
  query FindJourneys(
    $token: String!
    $startDate: String
    $endDate: String
    $startPaymentDate: String
    $endPaymentDate: String
    $wage: Float
    $address: String
    $paymentMethod: PaymentMethod
    $providesPpe: Boolean
    $hireEntity: HireEntity
    $page: Int
  ) {
    findJourneys(
      token: $token
      startDate: $startDate
      endDate: $endDate
      startPaymentDate: $startPaymentDate
      endPaymentDate: $endPaymentDate
      wage: $wage
      address: $address
      paymentMethod: $paymentMethod
      providesPpe: $providesPpe
      hireEntity: $hireEntity
      page: $page
    ) {
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
  findJourneys: {
    errors: string;
    pagination: IPaginationFragment;
    journeys: IJourneyFragment[];
  };
}

export interface Variables {
  page: number;
  token?: string;
  startDate?: string;
  endDate?: string;
  startPaymentDate?: string;
  endPaymentDate?: string;
  wage?: number;
  address?: string;
  paymentMethod?: string;
  providesPpe?: boolean;
  hireEntity?: string;
}

export default FindJourneys;
