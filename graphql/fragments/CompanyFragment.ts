import { gql } from '@apollo/client';

const CompanyFragment = gql`
  fragment CompanyFragment on Company {
    id
    name
    cnpj
  }
`;

export default CompanyFragment;
