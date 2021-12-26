import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { CoursesLoading } from '@components/loading/courses-loading'
import { getCoursesPagination } from 'redux/courses/thunks'
import { CourseSlider } from '@components/courses-slider'
import { PaginationItem } from '@components/pagination'
import { CourseCard } from '@components/course-card'
import { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'

const Courses = () => {
  const [page, setPage] = useState<number>(1)
  const dispatch = useDispatch()

  const courses = useSelector(
    (state: RootStateOrAny) => state.courseReducer.courses
  )
  const totalCourses = useSelector(
    (state: RootStateOrAny) => state.courseReducer.totalCourses
  )
  const loading = useSelector(
    (state: RootStateOrAny) => state.courseReducer.loading
  )

  const limit = 12

  useEffect(() => {
    dispatch(getCoursesPagination({ page, limit }))
  }, [])

  if (loading) return <CoursesLoading />

  return (
    <div className='courses'>
      <div className='container'>
        <div>
          <Grid container spacing={4} className='courses-list'>
            {courses.map(course => (
              <Grid item xs={12} sm={6} md={3} key={course._id}>
                <CourseCard
                  id={course._id}
                  title={course.title}
                  totalChapter={course.chapters.length}
                  description={course.description}
                  img={course.imageUrl}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        <PaginationItem
          count={Math.ceil(totalCourses / limit)}
          page={page}
          onChangePage={(page) => {
            setPage(page)
            dispatch(getCoursesPagination({ page, limit }))
          }}
        />
      </div>
      <div className='container'>
        <CourseSlider
          title='Relative Courses'
          courses={courses.slice(0, 6)}
        />
      </div>
    </div>
  )
}

export default Courses
