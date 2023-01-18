import type {
  DEFAULT_CODE,
  DEFAULT_DATA,
  DEFAULT_MESSAGE,
} from './config'

export interface IResponse<T = any> {
  [DEFAULT_CODE]: number
  [DEFAULT_DATA]: T
  [DEFAULT_MESSAGE]: string
}
