import { useEffect, useMemo } from 'react'
import { Grid, Button } from '@material-ui/core'
import { AiFillPlayCircle } from 'react-icons/ai'
import { HiOutlinePlus } from 'react-icons/hi'
import { FaPhotoVideo } from 'react-icons/fa'
import { BsBroadcastPin } from 'react-icons/bs'
import { BiTime } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { getCourseById } from '../../redux/courses/thunks'

const CourseDetail = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const courseItem = useSelector(
    (state: RootStateOrAny) => state.courseReducer.courseItem
  )

  const { title, chapters, description, price } = courseItem

  useEffect(() => {
    dispatch(getCourseById(router.query.courseId as string))
    // eslint-disable-next-line
  }, [])

  const totalLesson = useMemo(() => {
    let total: number = 0
    courseItem?.chapters?.map(item => (total += item.lessons.length))

    return total
  }, [courseItem])

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
                        <a href='123'>{`${idx} ${lesson.title}`}</a>
                        <span>2:25</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item lg={5} className='courseDetail-leftSide'>
            <a href='123' className='courseDetail-video'>
              <video src='https://firebasestorage.googleapis.com/v0/b/guru-academy-297d3.appspot.com/o/files%2Fvideoplayback.mp4?alt=media&token=d9981d54-daf0-4cc2-bede-f2686f715b35' />
            </a>
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
