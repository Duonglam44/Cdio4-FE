export enum GetCategories {
  GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCEEDED = 'GET_CATEGORIES_SUCCEEDED',
  GET_CATEGORIES_FAILED = 'GET_CATEGORIES_FAILED`',
}

export interface Category {
  discountPercent: number
  slug: string
  status: 1
  title: string
  topics: Topic[]
  _id: string
}
export interface Topic {
  courseCategoryId: string
  courses: string[]
  discountPercent: number
  slug: string
  status: number
  title: string
  _id: string
}
