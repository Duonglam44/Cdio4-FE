import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  createStyles,
  makeStyles
} from '@material-ui/core'
import { AiOutlineDown } from 'react-icons/ai';

interface Props {
  children?: React.ReactNode
  expanded?: boolean
  onAccordionChange?:
    | ((event: React.ChangeEvent<{}>, expanded: boolean) => void)
    | undefined
  label?: string
  labelNode?: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  editLabel?: string
  onEdit?: (...args: any[]) => void
}

export const AccordionSection = ({
  children,
  expanded,
  onAccordionChange,
  onEdit,
  label = 'Title',
  variant = 'primary',
  className,
  editLabel = 'Edit',
  labelNode,
}: Props) => {

  const classes = useStyles()

  return (
    <Accordion
      expanded={expanded}
      onChange={onAccordionChange}
      className={`${classes.accordionSection} ${className}`}
      style={{
        boxShadow: 'none',
        width: '100%',
      }}
    >
      <AccordionSummary
        expandIcon={<AiOutlineDown />}
        aria-controls='panel1bh-content'
        id='panel1bh-header-1'
        className={classes.accordionSummary}
      >
        <Grid container spacing={0} direction='row' alignItems='center'>
          <Grid item xs={12}>
            {labelNode ? (
              labelNode
            ) : (
              <p
                className={
                  variant === 'primary'
                    ? classes.titlePrimary
                    : classes.titleSecondary
                }
              >
                {label}
              </p>
            )}
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}
const useStyles = makeStyles((theme: any) =>
  createStyles({
    accordionSection: {
      border: '1px dashed #9f9f9f',
      borderRadius: 8,
      marginTop: '15px!important',
      marginBottom: '15px!important',
      boxShadow: 'none',
      width: '100%',
      background: '#ebebeb',
    },
    titlePrimary: {
      fontSize: 22,
      fontWeight: 300,
      transition: 'all 0.3s ease',
      '&:hover': {
        fontWeight: 'bold'
      }
    },
    titleSecondary: {
      fontSize: 14,
      fontWeight: 500,
      color: '#918f90',
      transition: 'all 0.3s ease',
      '&:hover': {
        color: '#231f20',
      }
    },
    accordionSummary: {
      height: 70,
      padding: '5px 15px',
      background: '#f7f7f7'
    },
    accordionDetails: {
      padding: '5px 15px',
      background: '#fff'
    }
  })
)
