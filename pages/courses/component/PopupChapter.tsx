import { useState } from 'react'
import { Paper, Button } from '@material-ui/core'
import { AiFillPlusSquare, AiFillDelete } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { createLesson } from '../../../redux/lesson/thunks'

interface IPopupChapter {
  chapterId: string
}

export const PopupChapter: React.FC<IPopupChapter> = ({ chapterId }) => {
  const [isPopup, setIsPopup] = useState<boolean>(false)
  const dispatch = useDispatch()

  const handleCreateLesson = () => {
    const params = {
      title: 'lesson',
      chapterId: `${chapterId}`,
    }
    dispatch(createLesson(params))
  }

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Button
          className='button-toggle'
          onClick={(_) => {
            setIsPopup(!isPopup)
          }}
        >
          <HiPlus />
        </Button>
        <Paper elevation={3} className={`${isPopup && 'show'} popup_wrap`}>
          <Button className='popup_item'>
            <div>Save This Chapter</div>
          </Button>
          <Button
            className='popup_item'
            onClick={() => {
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
