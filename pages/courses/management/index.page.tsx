import { useEffect, useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import { CourseCard } from '@components/course-card'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { getCoursesPagination } from 'redux/courses/thunks'
import { PaginationItem } from '@components/pagination'
import { CourseManagementLoading } from './components/loading/CourseManagementLoading'
import { TabsComponent } from '@components/tabs-component'
import router from 'next/router'
import { ErrorModal } from '@components/error-modal'

const CoursesManagement = () => {
  const [page, setPage] = useState<number>(1)
  const dispatch = useDispatch()
  // const courses = useSelector(
  //   (state: RootStateOrAny) => state.courseReducer.courses
  // )
  const totalCourses = useSelector(
    (state: RootStateOrAny) => state.courseReducer.totalCourses
  )
  const loading = useSelector(
    (state: RootStateOrAny) => state.courseReducer.loading
  )
  const limit = 12
  const currentUser = useSelector((state: RootStateOrAny) => state.auth?.data)
  const isCheckRole = (currentUser?.role?.id !== 2) ? true : false;
  // const teachingCourses = currentUser?.teachingCourses
  const courses = currentUser?.teachingCourses;

  useEffect(() => {
    dispatch(getCoursesPagination({ page, limit }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const handleChangeTab = (tabSlug: number) => {
  //   router.push(`courses/management?status=${tabSlug}`)
  // }

  if (loading) return <CourseManagementLoading />

  return (isCheckRole ? (
    <div className='courseManagement-wrap'>
      <div className='container'>
        <div className='courseManagement-headerControl'>
          <TabsComponent
            tabs={tabs}
            LabelRight={<Button variant='outlined' style={{ color: '#38B6FF' }}
              onClick={() => {
                router.push('/courses/create')
              }}
            >Create Course</Button>}
          />
        </div>
        <Grid container spacing={2} style={{ marginBottom: 20 }}>
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
      </div>) : <ErrorModal title='You cannot access the page!!!' returnUrl='/' />
  )
}

const tabs = [
  {
    id: null!,
    name: 'All Courses',
    slug: 'all',
  },
  {
    id: 0,
    name: 'Active',
    slug: 'active',
  },
  {
    id: 1,
    name: 'Inactive',
    slug: 'inactive',
  },
  {
    id: 2,
    name: 'Pending',
    slug: 'pending',
  },
  {
    id: 20,
    name: 'Draft',
    slug: 'draft',
  },
]

export default CoursesManagement
