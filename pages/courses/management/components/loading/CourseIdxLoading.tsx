import { Grid, createStyles, makeStyles } from '@material-ui/core'
import { SkeletonLoading } from '@components/skeleton-loading'

export const CourseIdxLoading = () => {

  const classes = useStyles()

  return (
    <div id='courseDetail' className='courseDetail'>
      <div className='container'>
        <Grid container spacing={10} style={{ justifyContent: 'flex-start' }}>
          <Grid item lg={7}>
            <h2 className={classes.courseTitle}><SkeletonLoading/> </h2>
            <p className={classes.courseDescription}><SkeletonLoading/> </p>
            <h2 className={classes.courseTitle}> <SkeletonLoading/> </h2>
            <ul className={classes.ul}>
              <li><SkeletonLoading/></li>
              <li><SkeletonLoading/></li>
            </ul>
            <div className={classes.chapterTag}>
              <SkeletonLoading/>
            </div>
            <div className={classes.chapterTag}>
              <SkeletonLoading/>
            </div>
            <div className={classes.chapterTag}>
              <SkeletonLoading/>
            </div>
          </Grid>
          <Grid item lg={5} className={classes.rightBar}>
            <div className={classes.thumbnail}>
              <SkeletonLoading/>
            </div>
            <p className={classes.price}><SkeletonLoading/></p>
            <div className={classes.subscribe}><SkeletonLoading/></div>
            <div className={classes.tag}>
              <p><SkeletonLoading/></p>
              <div><SkeletonLoading/></div>
            </div>
            <div className={classes.tag}>
              <p><SkeletonLoading/></p>
              <div><SkeletonLoading/></div>
            </div>
            <div className={classes.tag}>
              <p><SkeletonLoading/></p>
              <div><SkeletonLoading/></div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    courseTitle: {
      width: '50%',
      height: 20,
      marginBottom: 10,
    },
    courseDescription: {
      height: 100,
      marginBottom: 30,
    },
    ul: {
      display: 'flex',
      listStyle: 'none',
      marginBottom: 10,
      '& li': {
        width: 50,
        height: 15,
        margin: '5px 20px 0 0',
      }
    },
    chapterTag: {
      width: '100%',
      height: 50,
      marginBottom: 10,
    },
    rightBar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    thumbnail: {
      width: 454,
      height: 260,
      marginBottom: 20,
    },
    price: {
      width: 50,
      height: 20,
      marginBottom: 20
    },
    subscribe: {
      width: 130,
      height: 36,
      marginBottom: 20,
    },
    tag: {
      display: 'flex',
      marginBottom: 20,
      '& p': {
        width: 20,
        height: 20,
        marginRight: 15,
      },
      '& div': {
        width: 150,
        height: 20
      }
    }
  })
)
