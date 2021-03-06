// tslint:disable: cyclomatic-complexity
import Link from 'next/link'
import ViewItem from '@components/view-item'
import { Grid } from '@material-ui/core'
import { formatDateFromApi, getStatusText, isEmpty } from 'utils/helpers'
import React, { Fragment, useState } from 'react'
import { IoMdTrash } from 'react-icons/io'
import ConfirmModal from '@components/confirm-modal'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { LessonsInfo } from './LessonInfo'
import { AccordionSection } from '@components/accordion-main'
import { deleteChapter } from 'redux/chapter/thunks'

interface Props {
  data: any
}

export const ChaptersInfo = ({ data }: Props) => {
  const router = useRouter()
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false)
  const [deleteChapterId, setDeleteChapterId] = useState<string | null>(null)

  const dispatch = useDispatch()
  const chapterStateLoading = useSelector(
    (state: RootStateOrAny) => state.chapterReducer.loading
  )

  if (!data || !data.length) {
    return (
      <Grid item xs={12} className='page-course-detail__course-info--content'>
        <p>No data</p>
      </Grid>
    )
  }

  const handleViewDetailClick = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    chapterId: string,
    chapterNumber: number
  ) => {
    event.stopPropagation()
    await router.push(`/manage-courses/chapter/${chapterId}?n=${chapterNumber}`)
  }

  const handleOpenConfirmModal = (chapterId: string) => {
    setShowConfirmModal(true)
    setDeleteChapterId(chapterId)
  }

  const handleDeleteChapter = (chapterId: string) => {
    if (!chapterId) return

    dispatch(
      dispatch(deleteChapter(chapterId))
    )
  }

  const handleCloseConfirmModal = () => {
    setShowConfirmModal(false)
    setDeleteChapterId(null)
  }

  return (
    <Fragment>
      <ConfirmModal
        open={showConfirmModal}
        onClose={handleCloseConfirmModal}
        onCancel={handleCloseConfirmModal}
        onConfirm={handleDeleteChapter}
        content={`Are you sure you want to delete this chapter "${
          data.find(chapter => chapter._id === deleteChapterId)?.title || '--'
        }"?`}
        loading={chapterStateLoading}
      />
      <Grid container>
        <Grid
          item
          xs={12}
          className='page-course-detail__chapter-info--content'
        >
          {data.map((chapter, index) => (
            <AccordionSection
              key={chapter._id || index}
              label={`Chapter ${index + 1}: ${chapter.title}`}
              variant='secondary'
              editLabel='Detail'
              onEdit={event =>
                handleViewDetailClick(event, chapter._id, index + 1)
              }
            >
              <Grid
                container
                spacing={3}
                // onClick={() => handleChapterClick(chapter._id, index + 1)}
              >
                <Grid item xs={12}>
                  <Grid
                    container
                    className='page-course-detail__chapter-info--item'
                    spacing={1}
                  >
                    <Grid item xs={12}>
                      <p className='text-is-14 fw-bold mb-12'>Information</p>
                    </Grid>
                    <Grid item xs={3}>
                      <ViewItem label={'ID'} value={chapter._id} />
                    </Grid>
                    <Grid item xs={1}>
                      <ViewItem
                        label={'Lessons'}
                        value={chapter.lessons.length}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <ViewItem
                        label={'Slug'}
                        value={chapter.slug || '(no slug)'}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <ViewItem
                        label={'Status'}
                        value={getStatusText(chapter.status)}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <ViewItem
                        label={'Created'}
                        value={formatDateFromApi(chapter.createdAt)}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <ViewItem
                        label={'View'}
                        value={
                          <Link
                            href={''}
                            passHref
                          >
                            <span
                              style={{ cursor: 'pointer' }}
                              className='has-text-primary'
                            >
                              Detail
                            </span>
                          </Link>
                        }
                        className='ml-16'
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <ViewItem
                        label={'Delete'}
                        value={
                          <IoMdTrash
                            size={20}
                            className='has-text-danger ml-8'
                            cursor={'pointer'}
                            onClick={() => handleOpenConfirmModal(chapter._id)}
                          />
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <p className='text-is-14 fw-bold mb-20'>Lessons</p>
                  </Grid>
                  {!isEmpty(chapter.lessons) ? (
                    <Grid item xs={12} className='mt-24'>
                      <LessonsInfo lessonsData={chapter.lessons} />
                    </Grid>
                  ) : (
                    <p>No data</p>
                  )}
                </Grid>
              </Grid>
            </AccordionSection>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  )
}
