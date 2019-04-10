export interface IUserConfig {
  name: string;
}

export interface IApiMessage {
  error: boolean;
  data?: any;
  msg?: string;
}

export interface IUserRegistrationData {
  login: string;
  email: string;
  passwd?: string;
}
