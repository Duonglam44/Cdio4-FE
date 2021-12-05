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

  const currentCreateChapterId: string = useSelector((state: RootStateOrAny) => state.chapterReducer.currentCreateChapterId)

  useEffect(() => {
    if (!currentCreateChapterId) return
    setChapters([...chapters, currentCreateChapterId])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCreateChapterId])

  const handleCreateChapter = () => {
    const params = {
      title: `chapter ${chapters.length + 1}`,
      courseId: '61acf3c1caa49c85003b2481',
    }
    dispatch(createChapter(params))
  }

  return (
    <div className='chapterCreate'>
      <h2 className='title-page'>Setup your Chapter</h2>
      {chapters.map((item, idx) => (
        <ChapterItem key={item} idx={idx}/>
      ))}

      <Button variant='outlined' className='newChapter'
        onClick={() => {
          handleCreateChapter()
        }}
      >
        <CgMenuGridR />
        Add New Chapter
      </Button>

      <div className='controls'>
        <FormButton className='button button--next' type={ButtonType.SUBMIT}>
          {'< prev'}
        </FormButton>
        <FormButton className='button button--save' type={ButtonType.BUTTON}>
          save
        </FormButton>
        <FormButton className='button button--next'>{'next >'}</FormButton>
      </div>
    </div>
  )
}
