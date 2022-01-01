import { createStyles, makeStyles } from '@material-ui/core'
import dayjs from 'dayjs'
import { IBlogs } from '../../types/index'

interface IProps {
  blog: IBlogs
}

export const BlogCard: React.FC<IProps> = ({ blog }) => {
  const { name, description, createdAt, createdBy, imageUrl, authorAvt } = blog

  const classes = useStyles()

  return (
    <div className={classes.wrap}>
      <div className={classes.head}>
        <div className={classes.authorSection}>
          <img src={authorAvt} alt='' />
          <span>{createdBy}</span>
        </div>
        {/* <div></div> */}
      </div>
      <div className={classes.body}>
        <div className={classes.content}>
          <h2>{name}</h2>
          <p className={classes.description}>{description}</p>
          <p>{dayjs(createdAt).format('DD/MM/YYYY')}</p>
        </div>
        {imageUrl && <img src={imageUrl} alt='blog image' />}
      </div>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    wrap: {
      background: '#fff',
      padding: 15,
    },
    head: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    authorSection: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      '& > img': {
        width: 30,
        height: 30,
        borderRadius: 999,
        marginRight: 10,
      },
      '& span': {
        fontSize: 14,
        fontWeight: 500,
      },
    },
    body: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      '& > img': {
        width: 200,
        height: 150,
        borderRadius: 10,
      },
    },
    content: {
      marginBottom: 20,
      '& > h2': {
        marginBottom: 10,
      },
    },
    description: {
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
      'text-align': 'justify',
      'margin-right': '30px',
      overflow: 'hidden',
    },
  })
)
