import { gql } from '@apollo/client';

const CreateManager = gql`
  mutation CreateManager(
    $token: String!
    $name: String!
    $date: String!
    $paymentDate: String!
    $wage: Float!
    $address: String!
    $paymentMethod: PaymentMethod
    $providesPpe: Boolean
    $hireEntity: HireEntity
  ) {
    createJourney(
      input: {
        token: $token
        name: $name
        date: $date
        paymentDate: $paymentDate
        wage: $wage
        address: $address
        paymentMethod: $paymentMethod
        providesPpe: $providesPpe
        hireEntity: $hireEntity
      }
    ) {
      errors
    }
  }
`;

export interface Result {
  createJourney: {
    errors: string;
  };
}

export default CreateManager;
