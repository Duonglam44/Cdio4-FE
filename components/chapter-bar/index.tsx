// tslint:disable ter-func-call-spacing
import React from 'react'
import { Grid, createStyles, makeStyles, Box } from '@material-ui/core'
import { AccordionSection } from '../accordion-main'
import { StatusDot } from '../status-dot'
import { LessonPreview } from '../lesson-preview'

interface Props {
  chapters: any
  className?: string
  label?: string
  maxHeightSidebar?: string | number
  maxHeightContent?: string | number
  courseId?: string | null | undefined
  onSave?: any
}

export const ChapterBar: React.FC<Props> = ({ chapters, className }) => {
  const classes = useStyles()

  return (
    <>
      <Box className={`${classes.chapterBar} ${className}`}>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs={12}>
            {chapters?.map((chapter, index) => (
              <AccordionSection
                key={chapter._id}
                labelNode={
                  <Grid
                    container
                    key={chapter._id}
                    className={classes.lesson}
                    direction='row'
                    alignItems='center'
                  >
                    <Grid item xs={10} className={classes.flex}
                      title={chapter.title}
                    >
                      <StatusDot status={chapter?.status} />
                      <Box className={`my-8 ${classes.chapterTitle}`}>{`Chapter ${index + 1}: ${
                        chapter.title
                      }`}</Box>
                    </Grid>
                    <Grid item xs={2} className={classes.chapterLesson}>
                      {chapter.lessons?.length} lessons
                    </Grid>
                  </Grid>
                }
              >
                <LessonPreview lessons={chapter?.lessons} />
              </AccordionSection>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    chapterBar: {
      margin: '0 15px',
      '& .MuiAccordion-root': {
        marginTop: '0!important',
      }
    },
    lesson: {
      '&:firstChild': {
        paddingTop: 0,
      },
      padding: '5px 10px',
      backgroundColor: 'none',
    },
    icon: {
      cursor: 'pointer',
      color: 'rgb(175, 174, 174)',
      '&:hover': {
        color: '#333',
      },
    },
    chapterTitle: {
      fontWeight: 500,
      fontSize: 16,
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': 1,
      overflow: 'hidden',
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
    },
    text: {
      color: theme.primaryTextColor,
    },
    chapterLesson: {
      textAlign: 'right'
    }
  })
)
