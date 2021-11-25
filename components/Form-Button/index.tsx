import { ButtonType } from '../../types/componentTypes'
import { createStyles, makeStyles } from '@material-ui/styles'

type FormButton = {
  className?: string
  type?: ButtonType
  onClick?: (e: any) => void
  disabled?: boolean
  children?: any,
}

export const FormButton = ({
  className,
  type,
  onClick,
  disabled = false,
  children,
}: FormButton) => {

  const classes = useStyles()

  return (
    <button type={type} onClick={onClick} className={`${classes.button} ${className}`} disabled={disabled}>
      {children}
    </button>
  )
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    'button': {
      width: '100%',
      maxWidth: '300px',
      margin: '0 auto',
      padding: '10px',
      border: 'none',
      color: 'white',
      background: theme.palette.secondary.main,
      borderRadius: '10px',
      fontWeight: 500,
      textTransform: 'capitalize',
      cursor: 'pointer',
    }
  })
)
