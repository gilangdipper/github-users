import { useQuery } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'

import { TUserResponse, TErrorResponse } from '../types'

const getUserDetails = async (usernName: string): Promise<TUserResponse> => {
  const apiURL = 'https://api.github.com/users/'
  const res: AxiosResponse<TUserResponse, TErrorResponse> = await axios.get(
    `${apiURL}${usernName}`,
  )

  return res.data
}

export default function useGetUsers(userName: string) {
  return useQuery(['users', userName], () => getUserDetails(userName))
}
