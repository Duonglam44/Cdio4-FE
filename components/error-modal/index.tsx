import {
  Modal,
  Paper,
  Button,
  createStyles,
  makeStyles,
} from '@material-ui/core'
import router from 'next/router'
import { AiOutlineCloseCircle } from 'react-icons/ai'

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
        <div className={classes.errorBanner}>
          <AiOutlineCloseCircle />
        </div>
        <p className={classes.ops}>Ooops!</p>
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
      outline: 'none',
      border: 'none',
    },
    errorBanner: {
      width: '100%',
      height: '100px',
      background: '#e85e6c',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        width: 70,
        height: 70,
        color: '#fff',
      }
    },
    paper: {
      width: '100%',
      height: 'fit-content',
      outline: 'none',
      border: 'none',
      borderRadius: 10,
      overflow: 'hidden',
    },
    ops: {
      margin: '10px 0 0',
      fontSize: 30,
      fontWeight: 500,
      textAlign: 'center'
    },
    content: {
      padding: '0 20px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      padding: '0 20px',
      fontSize: 20,
      fontWeight: 400,
      color: '#333',
      textAlign: 'center',
      marginBottom: 30,
    },
    button: {
      color: '#38B6FF',
    },
  })
)
