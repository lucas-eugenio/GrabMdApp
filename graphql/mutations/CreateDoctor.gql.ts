import { gql } from '@apollo/client';

const DoctorFragment = gql`
  fragment DoctorFragment on Doctor {
    id
    name
  }
`;

const CreateDoctor = gql`
  mutation CreateDoctor(
    $name: String!
    $email: String!
    $crm: String!
    $password: String!
  ) {
    createDoctor(
      input: { name: $name, email: $email, crm: $crm, password: $password }
    ) {
      errors
      doctor {
        ...DoctorFragment
      }
    }
  }
  ${DoctorFragment}
`;

export default CreateDoctor;
