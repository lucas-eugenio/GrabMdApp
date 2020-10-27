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
  CompanyCreateManager: undefined;
};

export default RootStackParamList;
