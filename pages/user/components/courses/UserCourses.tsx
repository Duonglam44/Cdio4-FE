import { useState, useEffect } from 'react'
import { Grid, makeStyles, createStyles } from '@material-ui/core'
import { CourseCard } from '@components/course-card'
import { useSelector, RootStateOrAny } from 'react-redux'

export const UserCourses = () => {
  const classes = useStyles()
  const [filterId, setFilterId] = useState<number>(null!)
  const [courses, setCourses] = useState<any>(null!)
  const userRole = useSelector(
    (state: RootStateOrAny) => state.user.userData?.role
  )
  const teachingCourse = useSelector(
    (state: RootStateOrAny) => state.auth?.data?.teachingCourses
  )
  const learningCourses = useSelector(
    (state: RootStateOrAny) => state.auth?.data?.learningCourses
  )

  useEffect(() => {
    if (userRole?.id !== 3) {
      setCourses(learningCourses)

      return
    }
    setCourses(teachingCourse)
  }, [teachingCourse, learningCourses, userRole])

  return (
    <div className={classes.wrap}>
      <div className={classes.head}>
        <h2 className={classes.title}>All Courses</h2>
        <div className={classes.filterWrap}>
          <span className={classes.filterTitle}>Filter :</span>
          <div className={classes.filterContext}>
            {Object.values(CourseFilterArray).map((filter, idx) => (
              <span key={idx} className={`${classes.filterTag} ${filterId === idx ? 'active' : '' }`}
                style={{ color: `${filterId === idx ? `${filter.color}` :  '' }` }}
                onClick={() => {
                  setFilterId(idx)
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
        </div>
      </div>
      <Grid container spacing={2}>
        {courses?.map((course: any) => (
          <Grid item key={course._id} xs={12} md={6} lg={4}>
            <CourseCard
              id={course._id}
              title={course.title}
              img={course.imageUrl}
              description={course.description}
              totalChapter={123}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

const CourseFilterArray = {
  all: {
    name: 'All Course',
    color: '#66cc00',
  },
  active: {
    name: 'Active',
    color: '#00CCCC',
  },
  inactive: {
    name: 'Inactive',
    color: '#FF0000',
  },
  draft: {
    name: 'in Draft',
    color: '#202020',
  },
}

const useStyles = makeStyles((theme: any) =>
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
        content: '''',
        marginRight: 2,
        position: 'absolute',
        bottom: 0,
        left: 2,
        width: '70%',
        border: '1px solid',
        borderBottom: '1px solid',
      }
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
