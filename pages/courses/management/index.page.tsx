import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { CourseCard } from '@components/course-card'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { getCoursesPagination } from 'redux/courses/thunks'
import { PaginationItem } from '@components/pagination'
import { CourseManagementLoading } from './components/loading/CourseManagementLoading'

const CoursesManagement = () => {
  const [page, setPage] = useState<number>(1)
  const dispatch = useDispatch()
  const courses = useSelector(
    (state: RootStateOrAny) => state.courseReducer.courses
  )
  const totalCourses = useSelector(
    (state: RootStateOrAny) => state.courseReducer.totalCourses
  )
  const loading = useSelector((state: RootStateOrAny) => state.courseReducer.loading)
  const limit = 12

  useEffect(() => {
    dispatch(getCoursesPagination({ page, limit }))
  }, [])

  if (loading) return (<CourseManagementLoading />)

  return (
    <div className='courseManagement-wrap'>
      <div className='container'>
        <Grid container spacing={2}
          style={{ marginBottom: 20 }}
        >
          {courses?.map((course: any) => (
            <Grid key={course._id} item xs={12} md={6} lg={3}>
              <CourseCard
                id={course._id}
                img={course.imageUrl}
                title={course.title}
                description={course.description}
                totalChapter={course.chapters.length}
                passUrl={`/courses/management/${course._id}`}
                buttonContext={'config'}
              />
            </Grid>
          ))}
        </Grid>
        <PaginationItem
          count={Math.ceil(totalCourses / limit)}
          page={page}
          onChangePage={(page) => {
            setPage(page)
            dispatch(getCoursesPagination({ page, limit }))
          }}
        />
      </div>
    </div>
  )
}

export default CoursesManagement
