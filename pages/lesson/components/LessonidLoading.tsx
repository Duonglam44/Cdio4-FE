import { SkeletonLoading } from '../../../components/skeleton-loading'
import { Grid, Box, createStyles, makeStyles } from '@material-ui/core'

export const LessonIdLoading = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrap}>
      <Grid container>
        <Grid item sm={12} md={8}>
          <Box className={classes.video}>
            <SkeletonLoading/>
          </Box>
          <div>
            <h1 className={classes.courseTitle}><SkeletonLoading/></h1>
            <p className={classes.courseDes}><SkeletonLoading/></p>
          </div>
        </Grid>
        <Grid item sm={12} md={4} className='lessonItem-sidebar'>
          <Grid container className={classes.chapterBar}>
            {Array.from({ length: 4 }).map((_, index) => (
              <Grid item xs={12} className={classes.chapterItem} key={index}>
                <SkeletonLoading />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
const useStyles = makeStyles((theme: any) =>
  createStyles({
    wrap: {
      padding: '20px 0',
      background: '#fff',
    },
    chapterBar: {
      padding: '0 15px',
    },
    chapterItem: {
      width: '100%',
      height: 70,
      marginBottom: '15px',
    },
    video: {
      height: '80vh',
    },
    courseTitle: {
      width: '100%',
      height: '20px',
      margin: '10px 0',
      padding: '0 20px'
    },
    courseDes: {
      width: '100%',
      height: '40px',
      padding: '0 20px'
    }
  })
)
