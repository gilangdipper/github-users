export type TUserResponse = {
  avatar_url: string
  name: string
  company: string
  bio: string
  location: string
}

export type TErrorResponse = {
  errors: {
    code: number
    message: string
  }
}
