import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { CreateCourseForm } from './components/CreateCourseForm'
import { ChapterCreate } from './components/CreateChapterForm'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { CourseInfo } from '../management/components/courseInfo'
import { getCourseById } from 'redux/courses/thunks'

const CourseCreate = () => {
  const dispatch = useDispatch()
  const [tab, setTab] = useState(1)
  const currentCourses = useSelector((state: RootStateOrAny) => state.courseReducer?.courseItem)
  const currentCreatedCourse = useSelector((state: RootStateOrAny) => state.courseReducer?.currentCreateCourseId)

  useEffect(() => {
    dispatch(getCourseById(currentCreatedCourse))
  }, [currentCreatedCourse])

  return (
    <div className='course'>
      <div className='container'>
        <div className='course__top'>
          <p>{'Teacher >'}</p>
          <h2>Create new course</h2>
        </div>
        <div className='course__content'>
          <Grid container>
            <Grid item xs={3} className='course__content-menu'>
              {controlMenu.map((item, idx) => (
                <div
                  className={`course__content-menu-item ${
                    tab === idx + 1 && 'active'
                  }`}
                  onClick={() => {
                    setTab(idx + 1)
                  }}
                  key={idx}
                >
                  {`${idx + 1} ${item.name}`}
                </div>
              ))}
            </Grid>
            <Grid item xs={9} className='course__content-main'>
              <div style={{ display: `${tab === 1 ? 'block' : 'none'}` }}>
                <CreateCourseForm setTab={setTab} tab={tab} />
              </div>
              <div style={{ display: `${tab === 2 ? 'block' : 'none'}` }}>
                <ChapterCreate setTab={setTab} tab={tab} />
              </div>
              {
                tab === 3 && currentCourses && <CourseInfo selectedCourse={currentCourses}/>
              }
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}
export default CourseCreate

const controlMenu = [
  {
    tab: 1,
    name: 'Create Course',
  },
  {
    tab: 1,
    name: 'setting chapter',
  },
  {
    tab: 3,
    name: 'Course review',
  },
]
