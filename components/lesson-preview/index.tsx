import { Box, Grid, Button, createStyles, makeStyles } from '@material-ui/core'
import { AiOutlineFileText } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { StatusDot } from '../status-dot'
import { useDispatch } from 'react-redux'
import { takeCurrentLesson } from '../../redux/lesson/actions'
import { useRouter } from 'next/router'
import { BsDownload, BsArrowBarRight } from 'react-icons/bs'
import Link from 'next/link'

interface ILessonPreview {
  lessons: any
}

export const LessonPreview: React.FC<ILessonPreview> = ({ lessons }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const classes = useStyles()

  const handleClickLesson = (lesson: any) => {
    router.push(`/lesson/${lesson?._id}`, undefined, { shallow: true })
    dispatch(takeCurrentLesson(lesson))
  }

  return (
    <Box className={classes.wrap}>
      <Box className={classes.title}>Lessons Content</Box>
      <Box className={classes.content}>
        {lessons?.map((lesson, lIdx) => (
          <Box key={lesson._id}>
            <Box
              className={`${classes.row} ${classes.lessonName} ${
                (router.query?.lessonId as string) === lesson._id && 'active'
              }`}
              onClick={() => {
                handleClickLesson(lesson)
              }}
            >
              <StatusDot status={1} />
              {lIdx + 1}. {lesson.title}
            </Box>
            {lesson?.tests.map(test => (
              <Grid container className={classes.row} key={test._id}>
                <Grid item sm={9} className={classes.rowContent}>
                  <BiBook />
                  test 1
                </Grid>
                <Grid item sm={3}  className={classes.icon}>
                  <BsArrowBarRight/>
                </Grid>
              </Grid>
            ))}
            {lesson.attachments.map(attachment => (
              <Grid container className={classes.row} key={attachment._id}>
                <Grid item sm={9} className={classes.rowContent}>
                  <AiOutlineFileText />
                  test 1
                </Grid>
                <Grid item sm={3}  className={classes.icon}>
                  <Link href={attachment.url} passHref={true}>
                  <BsDownload/>
                  </Link>
                </Grid>
              </Grid>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    wrap: {
      margin: '10px 0',
      borderLeft: '1px solid #bbb',
      width: '100%',
    },
    title: {
      padding: '0 20px',
      width: '100%',
      height: 60,
      lineHeight: '60px',
    },
    content: {},
    lessonName: {},
    row: {
      cursor: 'pointer',
      padding: '0 20px',
      width: '100%',
      height: 50,
      lineHeight: '50px',
      '&:hover': {
        background: '#d3edff9c',
      },
      '&.active': {
        background: '#d3edff9c',
      },
    },
    icon: {
      fontSize: 22,
      textAlign: 'right',
      '& svg:hover': {
        color: '#38B6FF'
      }
    },
    rowContent: {
      display: 'flex',
      alignItems: 'center',
      textTransform: 'capitalize',
      '& svg': {
        fontSize: '20px',
        marginRight: 5,
      },
    },
  })
)
