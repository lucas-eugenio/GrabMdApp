import { gql } from '@apollo/client';

const PaginationFragment = gql`
  fragment PaginationFragment on Pagination {
    page
    pageCount
  }
`;

export interface IPaginationFragment {
  page: number;
  pageCount: number;
}

export default PaginationFragment;
