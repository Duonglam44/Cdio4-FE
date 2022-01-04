import { makeStyles, createStyles } from '@material-ui/core'
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineSchedule,
} from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { useSelector, RootStateOrAny } from 'react-redux'
import dayjs from 'dayjs'
import { defaultAvatar } from '../../../configs/constants'

export const UserSideBar = () => {
  const classes = useStyles()
  const thisUser = useSelector((state: RootStateOrAny) => state.user?.userData)

  return (
    <div className={classes.wrap}>
      <div className={classes.avatarWrap}>
        <img
          src={thisUser?.imageUrl || defaultAvatar}
          alt=''
          className={classes.avatar}
        />
        <h2 className={classes.userName}>{`${thisUser?.firstName} ${thisUser?.lastName}`}</h2>
      </div>
      <div className={classes.userSideBarContent}>
        <h3 className={classes.blockTitle}>Information</h3>
        <div className={classes.blockItem}>
          <span>
            <AiOutlineMail /> -
          </span>
          {thisUser?.email}
        </div>
        <div className={classes.blockItem}>
          <span>
            <AiOutlinePhone /> -
          </span>
          {thisUser?.phone || ''}
        </div>
        <div className={classes.blockItem}>
          <span>
            <GoLocation /> -
          </span>
          {`${thisUser?.address?.city} - ${thisUser?.address?.country}`}
        </div>
        <div className={classes.blockItem}>
          <span>
            <AiOutlineSchedule /> -
          </span>
          {dayjs(thisUser?.createdAt).format('DD/MM/YYYY')}
        </div>
      </div>
    </div>
  )
}

export const useStyles = makeStyles((theme: any) =>
  createStyles({
    wrap: {
      background: '#fff',
      padding: '10px 0 30px',
    },
    avatarWrap: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px 0 40px',
    },
    avatar: {
      borderRadius: 999,
      width: 130,
      height: 130,
      objectFit: 'cover',
      border: '1px solid #c1c1c1',
      marginBottom: 10,
    },
    userName: {
      fontSize: 24,
      fontWeight: 500,
      color: '#2c31cf',
      textTransform: 'capitalize',
    },
    userSideBarContent: {
      padding: '0 15px',
    },
    blockTitle: {
      fontSize: 18,
      fontWeight: 500,
      color: '#000',
      textTransform: 'uppercase',
      marginBottom: '15px',
    },
    blockItem: {
      fontSize: 15,
      color: 'rgb(51, 51, 51)',
      display: 'flex',
      alignItems: 'center',
      margin: '0 5px 10px 0',
      '& > span': {
        marginRight: 5,
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          margin: '0 5px',
        },
      },
    },
  })
)
