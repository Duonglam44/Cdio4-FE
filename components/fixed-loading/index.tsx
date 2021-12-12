
import { createStyles, makeStyles } from '@material-ui/core'
import ReactLoading, { LoadingType  } from 'react-loading'

interface ILoading {
  type?: LoadingType,
  color?: string
}

export const FixedLoading: React.FC<ILoading> = ({ type = 'spinningBubbles', color = '#fff' }) => {

  const classes = useStyles()

  return (
    <div className={classes.loading}>
      <ReactLoading type={type} color={color} width={100} height={100}/>
    </div>
  )
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    loading: {
      position: 'fixed',
      inset: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#128fb559',
      zIndex: 10,
    },
  })
)
