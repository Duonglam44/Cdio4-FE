import { makeStyles, Button } from '@material-ui/core'
import { IoMdDocument } from 'react-icons/io'
import Link from 'next/link'

interface ICourseCard {
  id: string
  title: string
  img: string
  description?: string
  totalChapter: number
}

export const CourseCard: React.FC<ICourseCard> = ({
  id,
  img,
  title,
  description,
  totalChapter,
}) => {
  const classes = useStyles()

  return (
    <div className={classes.card}>
      <div className={classes.imgWrap}>
        <Link href={`/courses/${id}`} passHref={true}>
          <img src={img} alt={`${title} image`} />
        </Link>
      </div>
      <div>
        <div className={classes.bottomItem}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.desc}>{description}</p>
        </div>
        <div className={classes.bottom}>
          <span>
            <IoMdDocument />
            {`${totalChapter} chapters`}
          </span>
          <Button variant='outlined' className={classes.buttonLearn}>
            Learn
          </Button>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles({
  card: {
    background: '#fff',
    borderRadius: 5,
    boxShadow: '0px 2px 10px #bcbcbc80',
    transition: 'all ease .4s',
    '&:hover': {
      boxShadow: '0px 5px 10px #242424e6',
      transform: 'translateY(-10px)'
    }
  },
  imgWrap: {
    height: 170,
    paddingBottom: 10,
    cursor: 'pointer',
    '& img': {
      objectFit: 'cover',
    },
  },
  title: {
    wordBreak: 'break-all',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
    overflow: 'hidden',
  },
  desc: {
    height: 40,
    marginBottom: 5,
    wordBreak: 'break-all',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    overflow: 'hidden',
  },
  bottomItem: {
    padding: '0 10px'
  },
  bottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '1px solid #ccc',
    padding: '5px 10px',
    '& span': {
      display: 'flex',
      alignItems: 'center',
    },
    '& svg': {
      fontSize: 20,
    },
  },
  buttonLearn: {
    color: '#38B6FF',
    borderColor: '#38B6FF',
  },
})
