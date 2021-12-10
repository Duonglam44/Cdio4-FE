import React, { useState, useEffect } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { Button } from '@material-ui/core'
import { FormButton } from '@components/Form-Button'
import { ButtonType } from '../../../types/componentTypes'
import { ChapterItem } from './ChapterItem'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { createChapter } from '../../../redux/chapter/thunks'

export const ChapterCreate = () => {
  const [chapters, setChapters] = useState<string[]>([])
  const dispatch = useDispatch()

  const state = useSelector((state: RootStateOrAny) => state)
  const currentCreateChapterId  = state.chapterReducer.currentCreateChapterId
  const currentCreateCourseId = state.courseReducer.currentCreateCourseId

  useEffect(() => {
    if (!currentCreateChapterId) return
    setChapters([...chapters, currentCreateChapterId])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCreateChapterId])

  const handleCreateChapter = () => {
    const params = {
      title: `chapter ${chapters.length + 1}`,
      courseId: currentCreateCourseId,
    }
    dispatch(createChapter(params))
  }

  const handleCreateCourse = () => {
    if (!currentCreateCourseId) {
      alert('Your have to create course first!')

      return
    }

    handleCreateChapter()
  }

  return (
    <div className='chapterCreate'>
      <h2 className='title-page'>Setup your Chapter</h2>
      {chapters.map((item, idx) => (
        <ChapterItem key={item} idx={idx}/>
      ))}

      <Button variant='outlined' className='newChapter'
        onClick={handleCreateCourse}
      >
        <CgMenuGridR />
        Add New Chapter
      </Button>

      <div className='controls'>
        <FormButton className='button button--next' type={ButtonType.SUBMIT}>
          {'< prev'}
        </FormButton>
        <FormButton className='button button--next'>{'next >'}</FormButton>
      </div>
    </div>
  )
}
