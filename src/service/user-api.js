import { http } from './http'

export const fetchUserInfo = user => http.get(`users/${user}`)