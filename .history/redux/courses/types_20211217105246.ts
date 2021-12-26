// create course
export enum CreateCourse {
  CREATE_COURSE_REQUEST = 'CREATE_COURSE_REQUEST',
  CREATE_COURSE_SUCCEEDED = 'CREATE_COURSE_SUCCEEDED',
  CREATE_COURSE_FAILED = 'CREATE_COURSE_FAILED'
}

// get a course
export enum GetCourseById {
  GET_COURSE_REQUEST = 'GET_COURSE_REQUEST',
  GET_COURSE_SUCCEEDED = 'GET_COURSE_SUCCEEDED',
  GET_COURSE_FAILED = 'GET_COURSE_FAILED'
}

// get courses
export enum GetCourses {
  GET_COURSES_REQUEST = 'GET_COURSES_REQUEST',
  GET_COURSES_SUCCEEDED = 'GET_COURSES_SUCCEEDED',
  GET_COURSES_FAILED = 'GET_COURSES_FAILED'
}

// get courses pagination
export enum GetCoursesPagination {
  GET_COURSES_REQUEST = 'GET_COURSES_REQUEST',
  GET_COURSES_SUCCEEDED = 'GET_COURSES_SUCCEEDED',
  GET_COURSES_FAILED = 'GET_COURSES_FAILED'
}

// Search Courses 
export enum SearchCourses {
  SEARCH_COURSES_REQUEST = 'SEARCH_COURSES_REQUEST',
  SEARCH_COURSES_SUCCEEDED = 'SEARCH_COURSES_SUCCEEDED',
  SEARCH_COURSES_FAILED = 'SEARCH_COURSES_FAILED'
}