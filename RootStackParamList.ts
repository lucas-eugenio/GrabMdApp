export type RootStackParamList = {
  // LoginAndRegister
  Start: {
    createdDoctor?: boolean;
    createdCompany?: boolean;
    deleteToken?: boolean;
  };
  Login: undefined;
  Register: undefined;
  CreateDoctor: undefined;
  CreateCompany: undefined;
  SignInDoctor: undefined;

  // Doctors
  DoctorHome: undefined;
  DoctorProfile: undefined;
};

export default RootStackParamList;
