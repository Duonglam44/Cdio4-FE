import { SkeletonLoading } from '@components/skeleton-loading'
import { Grid, createStyles, makeStyles } from '@material-ui/core'

export const CourseManagementLoading = () => {

  const classes = useStyles()

  return (
    <div className='courseManagement-wrap'>
      <div className='container'>
        <Grid container spacing={2} className={classes.courseCards}>
          {
            Array.from({ length: 12 }).map((_, idx) => (
              <Grid item key={idx} xs={12} md={6} lg={3}>
                <div
                  style={{
                    height: '285px'
                  }}
                >
                <SkeletonLoading/>
                </div>
              </Grid>
            ))
          }
        </Grid>
        <div className={classes.paginationWrap}>
          {
            Array.from({ length: 5 }).map((_, idx) => (
              <div className={classes.box} key={idx}>
                <SkeletonLoading />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    paginationWrap: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    box: {
      width: 32,
      height: 32,
      margin: '0 3px',
    },
    courseCards: {
      marginBottom: 20
    }
  })
)
