import { useEffect } from 'react'
import { Grid, createStyles, makeStyles } from '@material-ui/core'
import { ChapterBar } from '../../components/chapter-bar'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { LessonInfoTab } from './components/LessonInfoTab'
import { LessonIdLoading } from './components/LessonidLoading'
import router from 'next/router'
import { GetLessonById } from 'redux/lesson/thunks'
import { ErrorModal } from '@components/error-modal'

const LessonItem = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const currentLesson = useSelector(
    (state: RootStateOrAny) => state.lessonReducer.currentLesson
  )
  const loading = useSelector(
    (state: RootStateOrAny) => state.lessonReducer.loading
  )
  const courseItem = useSelector(
    (state: RootStateOrAny) => state.courseReducer.courseItem
  )

  useEffect(() => {
    dispatch(GetLessonById(router.query?.lessonId as string))
    // eslint-disable-next-line
  }, [])

  if (loading) return <LessonIdLoading />

  if (!currentLesson) return <ErrorModal title='Can not found this lesson!' />

  return (
    <div className={classes.wrap}>
      <Grid container>
        <Grid item sm={12} md={8}>
          <div className={classes.video}>
            <video
              width='100%'
              height='100%'
              style={{ objectFit: 'cover' }}
              controls
              key={currentLesson?.url || 1}
            >
              <source src={currentLesson?.url || '123'} type='video/mp4' />
            </video>
          </div>
          <LessonInfoTab courseItem={courseItem} />
        </Grid>
        <Grid item sm={12} md={4} className='lessonItem-sidebar'>
          <ChapterBar chapters={courseItem?.chapters} />
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    wrap: {
      padding: '20px 0',
      background: '#fff',
    },
    video: {
      width: '100%',
      height: '80vh',
    },
  })
)

export default LessonItem
