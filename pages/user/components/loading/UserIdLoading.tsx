import { Grid, createStyles, makeStyles } from '@material-ui/core'
import { SkeletonLoading } from '@components/skeleton-loading'

export const UserIdLoading = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrap}>
      <div className='container'>
        <Grid container spacing={4}>
          <Grid item md={3} className={classes.sidebar}>
            <SkeletonLoading />
          </Grid>
          <Grid item md={9}>
            <Grid className={classes.headContent}>
              <SkeletonLoading />
            </Grid>
            <Grid className={classes.bodyContent}>
              <SkeletonLoading />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    wrap: {
      padding: '30px 0',
      background: '#f1f1f1',
      minHeight: 'calc(100vh - 370px)',
    },
    sidebar: {
      height: 400,
    },
    headContent: {
      height: 66.5,
      marginBottom: 20,
    },
    bodyContent: {
      height: 600,
    },
  })
)
