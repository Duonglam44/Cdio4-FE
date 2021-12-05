import { useState } from 'react'
import { Paper, Button } from '@material-ui/core'
import { AiTwotoneVideoCamera } from 'react-icons/ai'
import { TiDocumentText } from 'react-icons/ti'
import { IoMdAttach } from 'react-icons/io'
import { HiPlus } from 'react-icons/hi'

export const PopupActions = () => {
  const [isPopup, setIsPopup] = useState<boolean>(false)

  return (
    <div style={{ position: 'relative' }}>
      <Button className='button-toggle'
        onClick={(e) => {
          setIsPopup(!isPopup)
        }}
      >
        <HiPlus />
      </Button>
      <Paper elevation={3} className={`${isPopup && 'show'} popup_wrap`} >
        <Button className='popup_item'>
          <div>
            <AiTwotoneVideoCamera />
            Video
          </div>
        </Button>
        <Button className='popup_item'>
          <div>
            <TiDocumentText />
            test
          </div>
        </Button>
        <Button className='popup_item'>
          <div>
            <IoMdAttach />
            Attachment
          </div>
        </Button>
      </Paper>
    </div>
  )
}
