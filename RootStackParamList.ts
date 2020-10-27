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

  // Doctor
  DoctorHome: undefined;
  DoctorProfile: undefined;

  // Company
  Company: undefined;
  CompanyHome: undefined;
  CompanyManagers: undefined;
  CompanyCreateManager: undefined;
  Managers: undefined;
};

export default RootStackParamList;
