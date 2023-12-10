export type EventTargetForm = {
  elements: Record<string, { value: string | number }>;
};

export type Car = {
  model: string;
};

export type GoogleOauthToken = {
  access_token: string;
  request_token: string;
  scope: string;
  token_type: string;
  id_token: string;
};

export type UserInfo = {
  email: string;
  given_name: string;
  name: string;
  picture: string;
};
