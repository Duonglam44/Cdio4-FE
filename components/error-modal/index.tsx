import {
  Modal,
  Paper,
  Button,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import router from 'next/router'

interface IProps {
  title: string
  className?: string
  returnContext?: string
  returnUrl?: string
}

export const ErrorModal: React.FC<IProps> = ({
  title,
  className,
  returnContext = 'Return Home',
  returnUrl = '/',
  children,
}) => {
  const classes = useStyles()

  return (
    <Modal open={true} className={`${classes.modal} ${className}`}>
      <Paper className={classes.paper}>
        <h2 className={classes.title}>{title}</h2>
        {children ? (
          { children }
        ) : (
          <div className={classes.content}>
            <Button
              variant='outlined'
              className={classes.button}
              onClick={() => {
                router.push(`${returnUrl}`)
              }}
            >
              {returnContext}
            </Button>
          </div>
        )}
      </Paper>
    </Modal>
  )
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    modal: {
      width: '100%',
      maxWidth: '500px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
    },
    paper: {
      width: '100%',
      height: 'fit-content',
      padding: 20,
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
      color: '#38B6FF',
    },
  })
)
