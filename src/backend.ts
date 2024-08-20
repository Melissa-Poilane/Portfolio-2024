import PocketBase from 'pocketbase'
import { Collections, type RevesResponse, type TypedPocketBase, type UsersResponse } from './pocketbase-types'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

