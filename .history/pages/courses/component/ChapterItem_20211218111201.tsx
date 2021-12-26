import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { LessonItem } from './LessonItem'
import { PopupChapter } from './PopupChapter'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { updateChapter } from '../../../redux/chapter/thunks'
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs'

interface IChapter {
  idx: number
  chapterId: string
}

export const ChapterItem: React.FC<IChapter> = ({ chapterId, idx }) => {
  const [collapseChapter, setCollapseChapter] = useState(false)
  const [isChangeName, setIsChangeName] = useState<boolean>(false)
  const [currentTitle, setCurrentTitle] = useState<string>(`Chapter ${idx + 1}`)
  const [lessons, setLessons] = useState<{ [key: string]: string }>({})
  const dispatch = useDispatch()

  const state = useSelector((state: RootStateOrAny) => state)
  const deletedLessonId = state.lessonReducer.deletedLessonId
  const { chapter, _id } = state.lessonReducer.currentCreateLesson

  useEffect(() => {
    if (chapterId !== chapter || !_id) return
    const tempLessons = { ...lessons }
    tempLessons[_id] = _id
    setLessons(tempLessons)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.lessonReducer.currentCreateLesson])

  useEffect(() => {
    if (!deletedLessonId) return
    const tempLessons = { ...lessons }
    delete tempLessons[deletedLessonId]
    setLessons(tempLessons)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletedLessonId])
  console.log(chapterId)

  const formik = useFormik({
    initialValues: {
      videos: [],
      tests: [],
      description: '',
    },
    onSubmit: (values) => {
      alert(values)
    },
  })

  const { handleSubmit } = formik

  return (
    <div>
      <form className='chapter' onSubmit={handleSubmit}>
        <div className='chapter__header'>
          <div>
            <span
              onClick={() => {
                setCollapseChapter(!collapseChapter)
              }}
            >
              {collapseChapter ? <BsCaretDownFill /> : <BsCaretUpFill />}
            </span>
            {`${idx + 1}. `}
            {isChangeName || (
              <h4
                onDoubleClick={() => {
                  setIsChangeName(true)
                  window.addEventListener('click', () => {
                    setIsChangeName(false)
                  })
                }}
              >
                {currentTitle}
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
                dispatch(updateChapter({ title: currentTitle }, chapterId))
              }}
              onBlur={(e) => {
                setIsChangeName(false)
                dispatch(updateChapter({ title: currentTitle }, chapterId))
              }}
            />
          </div>
          <PopupChapter chapterId={chapterId} />
        </div>
        <div className={`chapter__body ${collapseChapter && 'hidden'}`}>
          <div className='chapter__body-item lesson' style={{ minHeight: '0' }}>
            {Object.keys(lessons).map((item, index) => (
              <LessonItem key={item as string} lessonId={item} index={index} />
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}
