import { useState, useEffect } from 'react'
import { Button, TextareaAutosize } from '@material-ui/core'
import { PopupActions } from './PopupActions'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { updateLesson, deleteAttachment } from '../../../redux/lesson/thunks'
import { Attachment } from '../../../redux/lesson/types'
import Link from 'next/link'
import { RiCloseFill } from 'react-icons/ri'

export const LessonItem: React.FC<{ lessonId: string; index: number }> = ({
  lessonId,
  index,
}) => {
  const [isChangeName, setIsChangeName] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const [currentTitle, setCurrentTitle] = useState<string>(
    `lesson ${index + 1}`
  )
  const [video, setVideo] = useState<string>('')
  const [attachments, setAttachments] = useState<{ [key: string]: Attachment }>(
    null!
  )
  const dispatch = useDispatch()
  const state = useSelector((state: RootStateOrAny) => state)
  const createdAttachment = state.lessonReducer.currentCreateAttachment

  useEffect(() => {
    if (createdAttachment?.lesson !== lessonId || !createdAttachment) return
    const temp = { ...attachments }
    temp[createdAttachment._id] = createdAttachment
    setAttachments(temp)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createdAttachment])

  return (
    <>
      <div className='lessonItem-header'>
        <div>
          {isChangeName || (
            <h4
              onDoubleClick={() => {
                setIsChangeName(true)
                window.addEventListener('click', () => {
                  setIsChangeName(false)
                })
              }}
            >
              {`${index + 1}. ${currentTitle}`}
            </h4>
          )}
          <textarea
            className='rename-textArea'
            style={{ display: `${isChangeName ? 'block' : 'none'}` }}
            value={currentTitle}
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
            }}
            onChange={(e) => {
              setCurrentTitle(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.keyCode !== 13) return
              setIsChangeName(false)
              dispatch(updateLesson({ title: currentTitle }, lessonId))
            }}
            onBlur={(e) => {
              setIsChangeName(false)
              dispatch(updateLesson({ title: currentTitle }, lessonId))
            }}
          />
        </div>
        <PopupActions
          lessonId={lessonId}
          setVideo={setVideo}
          setProgress={setProgress}
        />
      </div>
      <div className='lessonItem'>
        {(progress !== 100 && progress !== 0) && (
          <>
            <progress value={progress} max={100} />{' '}
            <span>{`${progress}%`}</span>
          </>
        )}
        {video && (
          <video width='320' height='240' controls>
            <source src={video} type='video/mp4' />
          </video>
        )}
        <div className='lessonItem-box'>
          <h4>Test</h4>
          <div className='lessonItem-box__wrap'>
            <Button variant='outlined'>test 1</Button>
          </div>
        </div>
        {attachments && (
          <div className='lessonItem-box'>
            <h4>Attachment</h4>
            <div className='lessonItem-box__wrap'>
              {Object.values(attachments).map((attachment, index) => (
                <div className='item' key={index}>
                  <Link href={attachment?.url} passHref={true}>
                    <Button variant='outlined'>{attachment?.title}</Button>
                  </Link>
                  <RiCloseFill className='delete-icon'
                    onClick={(e) => {
                      e.stopPropagation()
                      dispatch(deleteAttachment(attachment._id))
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <h4>Description</h4>
        <TextareaAutosize
          className='lessonItem-desc'
          aria-label='description'
          placeholder='Type lesson description here...'
          minRows={5}
          style={{ resize: 'none', width: '100%' }}
          onBlur={(e) => {
            dispatch(updateLesson({ description: `${e.target.value}` }, lessonId))
          }}
        />
      </div>
    </>
  )
}
