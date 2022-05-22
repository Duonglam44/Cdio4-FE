import { Grid, Box, createStyles, makeStyles } from '@material-ui/core'
import { TextareaAutosize } from '@mui/material'
import { FiSend } from 'react-icons/fi'
export const Comment = () => {
  const classes = useStyles()

  return (
    <div style={{ padding: '30px 0' }}>
      <Grid container spacing={2} className={classes.writingCommentWrap}>
        <Grid
          item
          xs={10}
          style={{ display: 'flex', alignItems: 'flex-start' }}
        >
          <img
            src={'https://avatars.githubusercontent.com/u/83325805?v=4'}
            alt=''
            className={classes.currentUserAvatar}
          />
          <TextareaAutosize
            className={classes.writingComment}
            aria-label='comment'
            minRows={1}
            placeholder='Writing Your comment here...'
          />
        </Grid>
        <Grid item xs={2} className={classes.sendCommentBtn}>
          <FiSend />
        </Grid>
      </Grid>
      <Box className={classes.commentedSection}>
        {mockUserComment.map((comment, idx) => (
          <Grid container className={classes.userCommentWrap} key={idx}>
            <img
              src={comment.avatar}
              alt=''
              className={classes.currentUserAvatar}
            />
            <Box className={classes.userComment}>
              <h4>{comment.name}</h4>
              <p>{comment.comment}</p>
            </Box>
          </Grid>
        ))}
      </Box>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    currentUserAvatar: {
      width: 30,
      height: 30,
      borderRadius: 999,
      marginRight: 20,
    },
    writingCommentWrap: {
      padding: '15px 20px',
      marginBottom: 30,
    },
    writingComment: {
      border: 'none',
      outline: 'none',
      padding: '5px 10px 25px 0px',
      width: '100%',
      resize: 'none',
      borderBottom: '1px solid #888',
    },
    sendCommentBtn: {
      textAlign: 'right',
      fontSize: 25,
      lineHeight: '25px',
      color: '#007cff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      cursor: 'pointer'
    },
    userComment: {
      width: '100%',
      maxWidth: 500,
      background: '#f2f3f5',
      borderRadius: 10,
      padding: 10,
      lineHeight: 1.2,
      '& h4': {
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
      },
      '& p': {
        color: '#1c1e21',
      },
    },
    userCommentWrap: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: 15,
    },
    commentedSection: {
      padding: '0 20px',
    },
  })
)

const mockUserComment = [
  {
    name: 'Tommy',
    avatar:
      'https://cdn.fullstack.edu.vn/f8-learning/user_photos/141092/61b80f803970d.jpg',
    comment: 'this course is amazing',
  },
  {
    name: 'Johny Dang',
    avatar:
      'https://cdn.24h.com.vn/upload/2-2021/images/2021-06-09/hung-1623212570-106-width600height750.jpeg',
    comment: 'thanks author',
  },
  {
    name: 'Cici',
    avatar:
      'https://www.lemonshop.vn/Uploads/thumbs/bong%20we%20are%20bear%20(10).jpg',
    comment: 'amazing god job',
  },
]
