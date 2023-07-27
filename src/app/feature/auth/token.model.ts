export interface Token {
  access: AccessToken;
  refresh: RefreshToken;
}

export interface AccessToken {
  token: string;
  expires: string;
}

export interface RefreshToken {
  token: string;
  expires: string;
}
