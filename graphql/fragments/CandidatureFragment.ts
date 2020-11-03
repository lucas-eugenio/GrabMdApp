import { gql } from '@apollo/client';
import DoctorFragment, { IDoctorFragment } from './DoctorFragment';
import JourneyFragment, { IJourneyFragment } from './JourneyFragment';

const CandidatureFragment = gql`
  fragment CandidatureFragment on Candidature {
    id
    journey {
      ...JourneyFragment
    }
    doctor {
      ...DoctorFragment
    }
    status
  }
  ${JourneyFragment}
  ${DoctorFragment}
`;

export interface ICandidatureFragment {
  id: string;
  journey: IJourneyFragment;
  doctor: IDoctorFragment;
  status: string;
}

export default CandidatureFragment;
