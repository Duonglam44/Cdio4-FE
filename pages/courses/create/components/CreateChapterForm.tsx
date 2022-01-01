import React, { useState, useEffect } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import { Button } from '@material-ui/core'
import { FormButton } from '@components/Form-Button'
import { ButtonType } from 'types/componentTypes'
import { ChapterItem } from './ChapterItem'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { createChapter } from 'redux/chapter/thunks'
import { FixedLoading } from 'components/fixed-loading'

interface ICreate {
  setTab: (value: number) => void
  tab: number
}

export const ChapterCreate: React.FC<ICreate> = ({ setTab, tab }) => {
  const [chapters, setChapters] = useState<{ [key: string]: string }>({})
  const dispatch = useDispatch()

  const state = useSelector((state: RootStateOrAny) => state)
  const currentCreateChapterId = state.chapterReducer.currentCreateChapterId
  const deletedChapterId = state.chapterReducer.deletedChapterId
  const currentCreateCourseId = state.courseReducer.currentCreateCourseId
  const loading = state.chapterReducer.loading
  const lessonLoading = state.lessonReducer.loading

  useEffect(() => {
    if (!currentCreateChapterId) return
    const tempChapters = { ...chapters }
    tempChapters[currentCreateChapterId] = currentCreateChapterId
    setChapters(tempChapters)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCreateChapterId])

  useEffect(() => {
    if (!deletedChapterId) return
    const tempChapters = { ...chapters }
    delete tempChapters[deletedChapterId]
    setChapters(tempChapters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletedChapterId])

  const handleCreateChapter = () => {
    if (!currentCreateCourseId) {
      alert('Your have to create course first!')

      return
    }

    const params = {
      title: `chapter ${chapters.length + 1}`,
      courseId: currentCreateCourseId,
    }
    dispatch(createChapter(params))
  }

  return (
    <>
      {(loading  || lessonLoading) && <FixedLoading />}
      <div className='chapterCreate'>
        <h2 className='title-page'>Setup your Chapter</h2>
        {Object.keys(chapters).map((item, idx) => (
          <ChapterItem key={item} idx={idx}  chapterId={item}/>
        ))}

        <Button
          variant='outlined'
          className='newChapter'
          onClick={handleCreateChapter}
        >
          <CgMenuGridR />
          Add New Chapter
        </Button>

        <div className='controls'>
          <FormButton
            className='button button--next'
            type={ButtonType.SUBMIT}
            onClick={() => {
              setTab(tab - 1)
            }}
          >
            {'< prev'}
          </FormButton>
          <FormButton
            className='button button--next'
            onClick={() => {
              setTab(tab + 1)
            }}
          >
            {'next >'}
          </FormButton>
        </div>
      </div>
    </>
  )
}
