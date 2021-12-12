import { useState } from 'react'
import { Paper, Button } from '@material-ui/core'
import { AiFillPlusSquare, AiFillDelete } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { createLesson } from '../../../redux/lesson/thunks'
import { deleteChapter } from '../../../redux/chapter/thunks'

interface IPopupChapter {
  chapterId: string
}

export const PopupChapter: React.FC<IPopupChapter> = ({ chapterId }) => {
  const [isPopup, setIsPopup] = useState<boolean>(false)
  const dispatch = useDispatch()

  const handleCreateLesson = () => {
    const params = {
      title: 'lesson',
      url: 'none',
      chapterId: `${chapterId}`,
    }
    dispatch(createLesson(params))
  }

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Button
          className='button-toggle'
          onClick={(e) => {
            e.stopPropagation()
            setIsPopup(!isPopup)
            window.addEventListener('click', () => { setIsPopup(false) })
          }}
        >
          <HiPlus />
        </Button>
        <Paper elevation={3} className={`${isPopup && 'show'} popup_wrap`}>
          <Button
            className='popup_item'
            onClick={() => {
              setIsPopup(false)
              handleCreateLesson()
            }}
          >
            <div>
              <AiFillPlusSquare />
              Add lesson
            </div>
          </Button>
          <Button
            className='popup_item'
            variant='contained'
            style={{ background: '#cd1010', color: '#fff' }}
            onClick={(e) => {
              setIsPopup(false)
              dispatch(deleteChapter(chapterId))
            }}
          >
            <div>
              <AiFillDelete />
              Delete
            </div>
          </Button>
        </Paper>
      </div>
    </>
  )
}
