import { useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core'
import { OverView } from './OverView'
import { Comment } from './Comments'

interface IProps {
  courseItem: any,
}

export const LessonInfoTab: React.FC<IProps> = ({ courseItem }) => {
  const classes = useStyles()
  const [currentTab, setCurrentTab] = useState<number>(0)

  return (
    <div className={classes.wrap}>
      <div className={classes.courseInfo}>
        <h1 className={classes.courseTitle}>{courseItem?.title}</h1>
        <p className={classes.courseDes}>{courseItem?.description}</p>
      </div>
      <div className={classes.tabs}>
        {tabs.map((tab, index) => (
          <div
            className={`${classes.tab} ${currentTab === index && 'active'}`}
            key={index}
            onClick={() => {
              setCurrentTab(index)
            }}
          >
            {tab.context}
          </div>
        ))}
      </div>
      {currentTab === 0 && (<OverView/>)}
      {currentTab === 1 && (<Comment/>) }
    </div>
  )
}
const tabs = [
  {
    context: 'Overview',
  },
  {
    context: 'Comments',
  },
  {
    context: 'Help',
  },
]

const useStyles = makeStyles((theme: any) =>
  createStyles({
    wrap: {
      padding: '0 30px 20px',
      background: '#fff',
    },
    courseInfo: {
      marginBottom: 20
    },
    courseTitle: {
      fontSize: 23,
      fontWeight: 500,
      color: '#000',
      margin: '15px 0',
    },
    courseDes: {
      color: '#000',
      textAlign: 'justify',
    },
    tabs: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderBottom: '1px solid #666',
    },
    tab: {
      color: '#666',
      padding: '10px 0',
      marginRight: 20,
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      '&.active': {
        color: '#000',
        borderBottom: '2px solid #000',
      },
    },
  })
)
