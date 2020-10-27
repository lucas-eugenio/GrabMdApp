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
};

export default RootStackParamList;
