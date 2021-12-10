import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles'

type InputProps = {
  type: string
  name: string
  value?: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  hidden?: boolean
  className?: string
  error?: string
  errorClassName?: string
  label?: string,
  wrapperClass?: string
}

export const Input = ({
  type,
  name,
  value,
  onChange,
  disabled = false,
  hidden,
  className,
  error,
  errorClassName,
  label,
  wrapperClass,
}: InputProps) => {
  const classes = useStyles()

  return (
    <div className={`${classes.wrapper} ${wrapperClass}`}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        hidden={hidden}
        onChange={onChange}
        className={`${classes.input} ${className}`}
        disabled={disabled}
      />
      {error && (
        <span className={`${classes.error} ${errorClassName}`}>{error}</span>
      )}
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    label: {
      margin: '0 0 5px 10px',
      display: 'inline-block',
    },
    input: {
      width: '100%',
      height: '30px',
      border: '1px solid #000',
      outline: 'none',
      borderRadius: '10px',
      padding: '0 5px',
    },
    error: {
      fontSize: '12px',
      fontWeight: 400,
      color: 'red',
      marginLeft: '10px'
    },
    wrapper: {
      marginBottom: '10px',
      width: '100%',
    },
  })
)
