import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import { LessonItem } from './LessonItem'
import { PopupChapter } from './PopupChapter'
import { useSelector, RootStateOrAny } from 'react-redux'

interface IChapter {
  idx: number
}

export const ChapterItem: React.FC<IChapter> = ({ idx }) => {
  const [collapseChapter, setCollapseChapter] = useState(false)
  const [lessons, setLessons] = useState<string[]>([])

  const state = useSelector((state: RootStateOrAny) => state)
  const currentCreateChapterIds = state.chapterReducer.currentCreateChapterIds

  useEffect(() => {
    if (!state.lessonReducer.currentCreatedLessonId) return
    setLessons([...lessons, state.lessonReducer.currentCreatedLessonId])

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.lessonReducer.currentCreatedLessonId])

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
          <h4
            onClick={() => {
              setCollapseChapter(!collapseChapter)
            }}
          >
            {`${idx + 1}. Chapter ${idx + 1}`}
          </h4>
          <PopupChapter chapterId={currentCreateChapterIds[idx]} />
        </div>
        <div className={`chapter__body ${collapseChapter && 'hidden'}`}>
          <div className='chapter__body-item lesson' style={{ minHeight: '0' }}>
            {lessons.map(item => (
              <LessonItem key={item as string}
                lessonId={item}
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}
