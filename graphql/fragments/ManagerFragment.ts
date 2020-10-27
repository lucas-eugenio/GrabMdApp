import { gql } from '@apollo/client';

const ManagerFragment = gql`
  fragment ManagerFragment on Manager {
    id
    cpf
    name
    email
  }
`;

export default ManagerFragment;
