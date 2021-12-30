import { useState } from 'react'
import { Box, createStyles, makeStyles } from '@material-ui/core'
import { UserTabs } from './UserTabs'
import { UserCourses } from './courses/UserCourses'

export const UserPageContext = () => {
  const [tab, setTab] = useState<number>(0)
  const classes = useStyles()

  return (
    <div className={classes.wrap}>
      <UserTabs tabs={tabs} tab={tab} setTab={setTab} />
      <Box className={classes.content}>{tab === 0 && <UserCourses />}</Box>
    </div>
  )
}

const tabs = [
  {
    name: 'Course',
  },
  {
    name: 'LiveStream',
  },
  {
    name: 'Blog',
  },
  {
    name: 'forum',
  },
]

const useStyles = makeStyles((theme: any) =>
  createStyles({
    wrap: {},
    content: {
      background: '#fff',
      padding: 20,
    },
  })
)
