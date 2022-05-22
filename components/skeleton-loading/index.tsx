import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

export const SkeletonLoading = ({ className }: { className?: string }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.Col} ${className}`}>
      <Skeleton variant='rect' animation='wave' className={classes.CTImage} />
    </div>
  )
}
const useStyles = makeStyles(() =>
  createStyles({
    Col: {
      '-ms-flex': '0 0 25%',
      flex: '0 0 25%',
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      marginBottom: '30px',
      overflow: 'hidden',
    },
    CTImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.3s',
    },
  })
)
