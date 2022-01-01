export interface UserInfo {
  _id: string
  firstName: string
  lastName: string
  dateOfBirth: string
  address: string
  email: string
  role: { [key: string]: string | number }
  status?: number
  teachingCourses: string[]
  notifications: string[]
  learningCourses?: string[]
  createdAt: string,
  loading: boolean,
}

export interface IBlogs {
  name: string,
  description: string,
  createdAt:  string,
  imageUrl: string,
  createdBy: string,
  authorAvt: string
}
