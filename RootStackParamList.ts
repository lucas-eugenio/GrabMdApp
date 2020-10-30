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
  JourneysList: { createdJourney?: boolean };
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
};

export default RootStackParamList;
