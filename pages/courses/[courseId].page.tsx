import { useEffect, useState, useMemo } from 'react'
import { Grid, Button } from '@material-ui/core'
import { AiFillPlayCircle } from 'react-icons/ai'
import { HiOutlinePlus } from 'react-icons/hi'
import { FaPhotoVideo } from 'react-icons/fa'
import { BsBroadcastPin } from 'react-icons/bs'
import { BiTime } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { getCourseById } from '../../redux/courses/thunks'
import { CourseIdxLoading } from './management/components/loading/CourseIdxLoading'
import { ErrorModal } from '@components/error-modal'

const CourseDetail = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const courseItem = useSelector(
    (state: RootStateOrAny) => state.courseReducer.courseItem
  )
  const loading = useSelector(
    (state: RootStateOrAny) => state.courseReducer.loading
  )

  const { title, chapters, description, price } = courseItem || {}

  useEffect(() => {
    dispatch(getCourseById(router.query.courseId as string))
    // eslint-disable-next-line
  }, [])

  const totalLesson = useMemo(() => {
    let total: number = 0
    courseItem?.chapters?.map(item => (total += item.lessons.length))

    return total
  }, [courseItem])

  if (loading) return <CourseIdxLoading />

  if (!courseItem) {
    return <ErrorModal title='Can not found this course!' returnUrl='/' />
  }

  return (
    <div id='courseDetail' className='courseDetail'>
      <div className='container'>
        <Grid container spacing={10} style={{ justifyContent: 'flex-start' }}>
          <Grid item lg={7}>
            <h2 className='corseDetail-header'>{title}</h2>
            <p className='courseDetail-desc'>{description}</p>
            <h2>Nội Dung khóa học</h2>
            <ul className='courseDetail-nav'>
              <li>{`${chapters?.length} chapters`}</li>
              <li>{`${totalLesson} lessons`}</li>
            </ul>
            <div className='courseDetail-wrap'>
              {chapters?.map(chapter => (
                <div key={chapter._id}>
                  <div className='courseDetail-tag chapter-tag'>
                    <HiOutlinePlus className='svg-color' />
                    <h4 style={{ flex: 1, padding: '0px 20px' }}>
                      {chapter.title}
                    </h4>
                    <span>{`${chapter.lessons.length} lessons`}</span>
                  </div>
                  <div>
                    {chapter.lessons.map((lesson, idx) => (
                      <div
                        className='courseDetail-tag lesson-tag'
                        key={lesson._id}
                      >
                        <AiFillPlayCircle />
                        <a
                          onClick={() => {
                            router.push(`/lesson/${lesson._id}`)
                          }}
                        >{`${idx} ${lesson.title}`}</a>
                        <span>2:25</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item lg={5} className='courseDetail-leftSide'>
            <div className='courseDetail-video'>
              <img
                src={
                  'https://firebasestorage.googleapis.com/v0/b/guru-academy-297d3.appspot.com/o/files%2Freactjs.png?alt=media&token=36eb4497-7213-4315-8d62-c115caf94031'
                }
                alt='course image'
              />
            </div>
            <h3>{price ? `${price} $` : 'Free'}</h3>
            <Button variant='contained' className='courseDetail-subBtn'>
              Dang Ky Hoc
            </Button>
            <div className='detail-tag'>
              <div>
                <FaPhotoVideo />
                {`total ${totalLesson} lessons`}
              </div>
              <div>
                <BiTime />
                3h30m
              </div>
              <div>
                <BsBroadcastPin />
                Learn every where, every Time
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default CourseDetail
