import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import { CreateCourseForm } from './components/CreateCourseForm'
import { ChapterCreate } from './components/CreateChapterForm'

const CourseCreate = () => {
  const [tab, setTab] = useState(1)

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
