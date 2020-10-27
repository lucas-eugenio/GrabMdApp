import { gql } from '@apollo/client';

const ManagerFragment = gql`
  fragment ManagerFragment on Manager {
    id
    cpf
    name
    email
  }
`;

export interface IManagerFragment {
  id: string;
  cpf: string;
  name: string;
  email: string;
}

export default ManagerFragment;
