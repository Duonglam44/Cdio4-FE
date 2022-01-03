import React, { useEffect } from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { getCoursesPagination } from 'redux/courses/thunks'
import { CourseSlider } from '@components/courses-slider'

export const KeepUpToUpdate = () => {
  const dispatch = useDispatch()
  const courses = useSelector(
    (state: RootStateOrAny) => state.courseReducer.courses
  )

  useEffect(() => {
    dispatch(getCoursesPagination({ page: 1, limit: 6 }))
  }, [])

  return (
    <div className='keep-up'>
      <div className='keep-up-container'>
        <div>
          <div>
            <h2 className='keep-up__header'>keep up to date</h2>
            <p className='keep-up__ads'>
              Discover more about
              <br />
              GuruAcademy
            </p>
          </div>
        </div>
        <CourseSlider courses={courses} />
      </div>
    </div>
  )
}
