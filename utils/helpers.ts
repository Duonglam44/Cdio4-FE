import moment from 'moment'
import { nanoid } from 'nanoid'

import { CourseStatus, UserStatus } from '../configs/constants'

export const getAccountStatusText = (statusId: number) => {
  switch (statusId) {
    case UserStatus.ACTIVE:
      return 'Active'
    case UserStatus.PENDING:
      return 'Pending'
    case UserStatus.INACTIVE:
      return 'Inactive'
    case UserStatus.BANNED:
      return 'Banned'
    default:
      return 'Unknown'
  }
}

export const getCourseStatusText = (statusId: number | undefined) => {
  switch (statusId) {
    case CourseStatus.ACTIVE:
      return 'Active'
    case CourseStatus.PENDING:
      return 'Pending'
    case CourseStatus.INACTIVE:
      return 'Inactive'
    case CourseStatus.DRAFT:
      return 'Draft'
    default:
      return 'Unknown'
  }
}

export const getStatusText = (statusId: number | undefined) => {
  switch (statusId) {
    case 0:
      return 'Inactive'
    case 1:
      return 'Active'
    case 2:
      return 'Pending'
    case 10:
      return 'Banned'
    case 20:
      return 'Draft'
    default:
      return 'Unknown'
  }
}

export const formatDateForForm = (date: Date | string | undefined) => {
  return moment(date).format('yyyy-MM-DD')
}

export const formatDateFromApi = (date: Date | string | undefined) => {
  return moment(date).format('DD-MM-YYYY')
}

export const isEmpty = (value: any): boolean =>
  value === undefined ||
  value === null ||
  // tslint:disable-next-line: use-isnan
  value === NaN ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value === '') ||
  (Array.isArray(value) && value.length === 0)

export const isNumeric = (num: any) => {
  return !isNaN(num)
}

export const getRandomId = (): string => nanoid()

export const getFullNameFromFirstAndLastName = (
  firstName: string | undefined | null,
  lastName: string | undefined | null
) => {
  if (!firstName) return '--'
  if (!lastName) return firstName

  return `${firstName} ${lastName}`
}

export const paginate = (array: any[], count: number, page: number) => {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page - 1) * count, page * count)
}

// convert array - object to object - object after get api if api return to much values
export function convertArrayObjectToObject<T extends { [key: string]: any }>(
  array: T[],
  keyObj: string
) {
  if (!array?.length) {
    return {}
  }
  const obj: { [key: string]: T } = {}

  array.forEach((item: T) => {
    const keyValue = item[keyObj]

    return (obj[keyValue] = item)
  })

  return obj
}
