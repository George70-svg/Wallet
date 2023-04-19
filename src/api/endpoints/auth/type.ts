export type UserRequest = {
  login: string
  email: string
  password: string
  confirmPassword: string
}

export type UserResponse = {
  user_id: string
  login: string
  email: string
  wallet_currency: string
}

export type LoginRequest = {
  login: string
  password: string
}

export type LoginResponse = {
  access_token: string
  refresh_token: string
}
