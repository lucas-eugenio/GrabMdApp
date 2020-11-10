import { ICandidatureFragment } from './graphql/fragments/CandidatureFragment';

interface JourneyDetails {
  id: string;
  address: string;
  company: {
    id: string;
    name: string;
    cnpj: string;
  };
  date: string;
  doctor?: {
    name: string;
    crm: string;
  };
  hireEntity: string;
  name: string;
  paymentDate: string;
  paymentMethod: string;
  providesPpe: boolean;
  wage: number;
}

export type RootStackParamList = {
  // Start
  Start: {
    createdDoctor?: boolean;
    createdCompany?: boolean;
    logout?: boolean;
  };
  Login: undefined;
  Register: undefined;
  CreateDoctor: undefined;
  CreateCompany: undefined;
  SignInDoctor: undefined;
  SignInCompany: undefined;
  SignInManager: undefined;

  // Doctor
  DoctorHome: undefined;
  DoctorProfile: undefined;

  // Managers
  ManagersList: { createdManager?: boolean };

  // Journey
  JourneysList: { createdJourney?: boolean; acceptedJourney?: boolean };
  JourneyDetails: {
    journey: JourneyDetails;
  };
  FindJourneysList: {
    createdCandidature?: boolean;
    filter?: {
      startDate?: string;
      endDate?: string;
      startPaymentDate?: string;
      endPaymentDate?: string;
      wage?: number;
      address?: string;
      paymentMethod?: string;
      providesPpe?: boolean;
      hireEntity?: string;
    };
  };
  FilterJourneys: undefined;

  // Candidature
  CreateCandidature: {
    journey: JourneyDetails;
  };
  CandidatureDetails: {
    candidature: ICandidatureFragment;
  };
  JourneyCandidatures: {
    journeyId: string;
  };
};

export default RootStackParamList;
