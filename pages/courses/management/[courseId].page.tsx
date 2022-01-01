import { useEffect, useState } from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { getCourseById } from 'redux/courses/thunks'
import router from 'next/router'
import { Modal, Button } from '@material-ui/core'
import { TabsComponent } from '@components/tabs-component'
import { CourseInfo } from './components/courseInfo'
import { CourseInfoForm } from './components/CourseInfoForm'
import { ChaptersInfo } from './components/ChapterInfo'

const CourseManagement = () => {
  const [tab, setTab] = useState<number>(0)
  const [isOpenCourseForm, setIsOpenCourseForm] = useState<boolean>(false)
  const dispatch = useDispatch()
  const currentCourse = useSelector(
    (state: RootStateOrAny) => state.courseReducer.courseItem
  )

  useEffect(() => {
    dispatch(getCourseById(router.query?.courseId as string))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query?.courseId])

  return (
    <div className='courseManagement-wrap'>
      <div className='container'>
        <TabsComponent currentTabIdx={tab} onClick={setTab} tabs={tabs} />
        <div className='courseManagement-wrap'>
          {tab === 0 && (
            <>
              <Modal
                open={isOpenCourseForm}
                className={'courseManagement-editModal'}
                onClose={() => {
                  setIsOpenCourseForm(false)
                }}
              >
                <CourseInfoForm
                  selectedCourse={currentCourse}
                  onClose={() => setIsOpenCourseForm(false)}
                />
              </Modal>
              <div className='courseManagement-context-header'>
                <h2>Course Information</h2>
                <Button
                  variant='outlined'
                  onClick={() => {
                    setIsOpenCourseForm(true)
                  }}
                >
                  Edit
                </Button>
              </div>
              <CourseInfo selectedCourse={currentCourse} />
            </>
          )}
          {tab === 1 && (
            <>
              <div className='courseManagement-context-header'>
                <h2>Chapters of this course</h2>
              </div>
              <ChaptersInfo data={currentCourse?.chapters}/>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const tabs = [
  {
    id: 0,
    name: 'Preview',
  },
  {
    id: 1,
    name: 'Chapters',
  },
  {
    id: 2,
    name: 'Learners',
  },
  {
    id: 3,
    name: 'Feedback',
  },
]

export default CourseManagement
