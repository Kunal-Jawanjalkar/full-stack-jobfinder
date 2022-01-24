export interface ICompanyDetails {
  jwt: {
    token: String;
  };
  _id: String;
  email: String;
  name: String;
  phoneNumber: String;
  location: String;
  category: String;
  description?: String;
}
