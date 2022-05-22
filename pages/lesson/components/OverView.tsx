import { createStyles, makeStyles } from '@material-ui/core'
import { useSelector, RootStateOrAny } from 'react-redux'

const defaultImg = 'https://avatars.githubusercontent.com/u/83325805?v=4'

export const OverView = () => {
  const classes = useStyles()
  const currentLesson = useSelector(
    (state: RootStateOrAny) => state.lessonReducer.currentLesson
  )

  return (
    <div>
      <div className={classes.author}>
        <div className={classes.authorName}>
          <img
            src={defaultImg}
            alt='author avatar'
            className={classes.avatar}
          />
          <span>Duong Lam</span>
        </div>
      </div>
      <div>
        <h2 className={classes.lessonTitle}>
          {currentLesson?.title}
          <span className={`${classes.badge} ${classes.test}`}>
            {currentLesson?.tests?.length} tests
          </span>
          <span className={`${classes.badge} ${classes.attach}`}>
            {currentLesson?.attachments?.length} Attachment
          </span>
        </h2>
        <p className={classes.lessonDesc}>{currentLesson?.description}</p>
      </div>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    lessonTitle: {
      fontSize: 18,
      color: '#000',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      padding: '10px 0',
    },
    lessonDesc: {
      fontSize: 14,
      color: '#333',
      textAlgin: 'justify',
    },
    badge: {
      display: 'inline-block',
      padding: '5px',
      margin: '0 10px',
      fontSize: 10,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      color: 'white',
      borderRadius: 5,
    },
    test: {
      background: '#2063e3',
    },
    attach: {
      background: '#ff5500',
    },
    author: {
      padding: '20px 0',
    },
    authorName: {
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 1000,
      border: '1px solid #f1f1f1',
      cursor: 'pointer',
      marginRight: 20,
    },
  })
)
