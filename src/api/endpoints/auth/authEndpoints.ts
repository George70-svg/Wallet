import { AxiosResponse } from 'axios'
import { axiosInstance, axiosTokenInstance } from '@endpoints/axios'

import { LoginRequest, LoginResponse, UserRequest, UserResponse } from './type'

export const authEndpoints = {
  async signUp(newUser: UserRequest): Promise<UserResponse> {
    return axiosInstance.post('/auth/sign-up', {
      login: newUser.login,
      email: newUser.email,
      password_1: newUser.password,
      password_2: newUser.confirmPassword,
    })
  },
  async login(user: LoginRequest): Promise<LoginResponse> {
    return axiosInstance
      .post(
        '/auth/login',
        {
          username: user.login,
          password: user.password,
        },
        {
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(({ data }: AxiosResponse<LoginResponse>) => data)
  },
  async getMe(): Promise<UserResponse> {
    return axiosTokenInstance.get('/user')
      .then(({ data }: AxiosResponse<UserResponse>) => data)
  },
}
