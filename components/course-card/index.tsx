import { makeStyles, Button } from '@material-ui/core'
import { IoMdSettings, IoMdDocument } from 'react-icons/io'
import Link from 'next/link'
import router from 'next/router'

interface ICourseCard {
  id: string
  title: string
  img: string
  description?: string
  totalChapter: number
  passUrl?: string
  buttonContext?: string
}

export const CourseCard: React.FC<ICourseCard> = ({
  id,
  img,
  title,
  description,
  totalChapter,
  passUrl,
  buttonContext = 'Learn',
}) => {
  const classes = useStyles()

  const handleClickCard = () => {
    if (!passUrl) {
      router.push(`/courses/${id}`)

      return
    }
    router.push(passUrl)
  }

  return (
    <div className={classes.card}>
      <div className={classes.imgWrap} onClick={handleClickCard}>
        <img src={img} alt={`${title} image`} />
        {passUrl && <IoMdSettings className='setting' />}
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
          <Button
            variant='outlined'
            className={classes.buttonLearn}
            onClick={handleClickCard}
          >
            {buttonContext}
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
      transform: 'translateY(-10px)',
    },
  },
  imgWrap: {
    height: 170,
    paddingBottom: 10,
    cursor: 'pointer',
    position: 'relative',
    '& img': {
      objectFit: 'cover',
    },
    '& .setting': {
      position: 'absolute',
      top: 10,
      right: 10,
      fontSize: 22,
      opacity: 0,
      visibility: 'hidden',
      color: '#000',
    },
    '&:hover .setting': {
      opacity: 1,
      visibility: 'visible',
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
    padding: '0 10px',
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
