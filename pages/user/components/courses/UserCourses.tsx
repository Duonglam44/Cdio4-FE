import { useState, useMemo, useEffect } from 'react'
import { Grid, makeStyles, createStyles } from '@material-ui/core'
import { CourseCard } from '@components/course-card'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { getCoursesPagination } from 'redux/courses/thunks'

export const UserCourses = () => {
  const classes = useStyles()
  const [filterId, setFilterId] = useState<number>(null!)
  const [courses, setCourses] = useState<any>(null!)
  const [learningCourses, setLearningCourses] = useState<any>([])
  const dispatch = useDispatch()

  const userRole = useSelector(
    (state: RootStateOrAny) => state.user.userData?.role
  )
  const teachingCourse = useSelector(
    (state: RootStateOrAny) => state.user.userData?.teachingCourses
  )
  const listLearningCourses = useSelector(
    (state: RootStateOrAny) => state.auth.data?.learningCourses
  )

  const listAllCourse = useSelector(
    (state: RootStateOrAny) => state.courseReducer.courses
  )

  useEffect(() => {
    dispatch(getCoursesPagination({ page: 1, limit: 100 }))
  }, [])
  // conver array id course to array object course
  useEffect(() => {
    const listCourseTemp: any = []
    let listLearningCoursesId = []
    if (listLearningCourses) {
      listLearningCoursesId = listLearningCourses.map((item) => {
        return item?.courseId
      })
    }
    if (listLearningCoursesId) {
      listLearningCoursesId.forEach((item) => {
        const findTemp = listAllCourse.find((course) => {
          if (course?._id === item) {
            return course
          }
        })
        if (findTemp) {
          listCourseTemp.push(findTemp)
        }
      })
    }
    setLearningCourses(listCourseTemp)
  }, [listLearningCourses, listAllCourse])

  const allCourses = useMemo(() => {
    if (userRole?.id !== 3) {
      setCourses(learningCourses)

      return learningCourses
    }
    setCourses(teachingCourse)

    return teachingCourse
  }, [teachingCourse, learningCourses, userRole])

  const handleFilterCourses = (id: number) => {
    switch (id) {
      case 0: {
        const tempCourses = allCourses.filter(course => course.status === 0)
        setCourses(tempCourses)

        return
      }
      case 1: {
        const tempCourses = allCourses.filter(course => course.status === 1)
        setCourses(tempCourses)

        return
      }
      case 2: {
        const tempCourses = allCourses.filter(course => course.status === 2)
        setCourses(tempCourses)

        return
      }
      case 20: {
        const tempCourses = allCourses.filter(course => course.status === 20)
        setCourses(tempCourses)

        return
      }

      default: {
        setCourses(allCourses)
      }
    }
  }

  return (
    <div className={classes.wrap}>
      <div className={classes.head}>
        <h2 className={classes.title}>All Courses</h2>
        {userRole?.id !== 2 && (
          <div className={classes.filterWrap}>
            <span className={classes.filterTitle}>Filter :</span>
          <div className={classes.filterContext}>
            {Object.values(CourseFilterArray).map((filter, idx) => (
              <span
                key={idx}
                className={`${classes.filterTag} ${
                  filterId === filter.id ? 'active' : ''
                }`}
                style={{
                  color: `${filterId === filter.id ? `${filter.color}` : ''}`,
                }}
                onClick={() => {
                  setFilterId(filter.id)
                  handleFilterCourses(filter.id)
                }}
              >
                {filter.name}{' '}
                <label
                  className={classes.filterHint}
                  style={{ background: `${filter.color}` }}
                />
              </span>
            ))}
          </div>
        </div>)}
      </div>
      <Grid container spacing={2}>
        {courses?.map((course: any) => (
          <Grid item key={course._id} xs={12} md={6} lg={4}>
            <CourseCard
              id={course._id}
              title={course.title}
              img={course.imageUrl}
              description={course.description}
              totalChapter={course?.chapters.length}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

const CourseFilterArray = {
  all: {
    id: null!,
    name: 'All Course',
    color: '#66cc00',
  },
  active: {
    id: 0,
    name: 'Active',
    color: '#00CCCC',
  },
  inactive: {
    id: 1,
    name: 'Inactive',
    color: '#FF0000',
  },
  pending: {
    id: 2,
    name: 'Pending',
    color: 'orange',
  },
  draft: {
    id: 20,
    name: 'in Draft',
    color: '#202020',
  },
}

const useStyles = makeStyles(() =>
  createStyles({
    wrap: {},
    head: {
      marginBottom: 20,
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 22,
      fontWeight: 500,
      color: '#000',
    },
    filterWrap: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    filterTitle: {
      fontSize: 18,
      fontWeight: 400,
      marginRight: 10,
    },
    filterContext: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    filterTag: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      cursor: 'pointer',
      '&.active::after': {
        content: '""',
        marginRight: 2,
        position: 'absolute',
        bottom: 0,
        left: 2,
        width: '70%',
        border: '1px solid',
        borderBottom: '1px solid',
      },
    },
    filterHint: {
      display: 'inline-block',
      width: 6,
      height: 6,
      borderRadius: 999,
      margin: '0 7px',
    },
  })
)
