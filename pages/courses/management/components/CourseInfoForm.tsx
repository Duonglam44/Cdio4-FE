import type { NextPage } from 'next'
import { useState, Fragment, useEffect } from 'react'
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux'
import { Button, Grid, TextField } from '@material-ui/core'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import { useFormik } from 'formik'
import { formatDateFromApi, isEmpty } from '../../../../utils/helpers'
import FileUpload from '@components/file-upload'
import Select from '@components/select'
import { CourseFormSchema, CourseInfoFormType, statusOptions } from './helpers'
import View from '@components/view'
import { LoaderBall } from '@components/loading/loadingBall'
import ConfirmModal from '@components/confirm-modal'
import { BsChevronDown } from 'react-icons/bs'
import { uploadFileThunkAction } from '../../../../redux/files/thunks'
import { updateCourse, deleteCourse } from 'redux/courses/thunks'
import router from 'next/router'

// tslint:disable-next-line: cyclomatic-complexity
export const CourseInfoForm: NextPage<Props> = ({
  onClose,
  selectedCourse,
}) => {
  const dispatch = useDispatch()
  const categoriesState = useSelector(
    (state: RootStateOrAny) => state.globalReducer.categories
  )
  const uploadFileLoading = useSelector(
    (state: RootStateOrAny) => state.files.loading
  )

  const [thumbnailFile, setThumbnailFile] = useState<File[]>()
  const [expanded, setExpanded] = useState<number>(1)
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] =
    useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<any>()
  const [selectedTopic, setSelectedTopic] = useState<any>()
  const categoriesOption = Object.values(categoriesState)?.map(
    (category: any) => ({
      label: category.title,
      value: category._id,
    })
  )
  const topicsOption = selectedCategory?.topics.map(topic => ({
    label: topic.title,
    value: topic._id,
  }))

  const handleAccordionChange = (panel: number) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : 0)
  }

  const handleShowConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(true)
  }

  const handleCloseConfirmDeleteModal = () => {
    setShowConfirmDeleteModal(false)
  }

  const initialValues: CourseInfoFormType = {
    id: selectedCourse?._id || '',
    title: selectedCourse?.title || '',
    description: selectedCourse?.description || '',
    imageUrl: selectedCourse?.imageUrl || '',
    status: selectedCourse?.status ?? 1,
    categoryId: selectedCourse?.topic.courseCategoryId._id || '',
    topicId: selectedCourse?.topic?._id || '',
    price: selectedCourse?.price || 0,
    discount: selectedCourse?.discount || 0,
    slug: selectedCourse?.slug || '',
    tags: selectedCourse?.tags.join(', ') || '',
  }
  /* eslint-disable */
  const handleSubmit = (values: CourseInfoFormType) => {
    if (!thumbnailFile || isEmpty(thumbnailFile)) return
    const tags = formik.values.tags.split(',')

    dispatch(
      uploadFileThunkAction(thumbnailFile[0], (imageUrl: string) => {
        dispatch(
          updateCourse(
            formik.values.id,
            { ...values, tags, imageUrl },
            () => onClose && onClose()
          )
        )
      })
    )
  }

  const handleDeleteAccount = () => {
    if (!selectedCourse || !selectedCourse?._id) return
    dispatch(
      deleteCourse(selectedCourse._id, async () => {
        await router.push('/home')
      })
    )
  }

  const formik = useFormik({
    initialValues,
    validationSchema: CourseFormSchema,
    onSubmit: handleSubmit,
  })

  useEffect(() => {
    setSelectedCategory(categoriesState[formik.values.categoryId])
  }, [categoriesState, formik.values.categoryId])

  useEffect(() => {
    setSelectedTopic(
      selectedCategory?.topics?.find(topic => topic._id === formik.values.topicId)
    )
  }, [formik.values.topicId, selectedCategory?.topics])

  return (
    <form onSubmit={formik.handleSubmit} className='modal-main-form'>
      <Grid container className='modal-main__body' spacing={3}>
        <Grid item md={12} className='modal-main__body--item'>
          <Accordion
            expanded={expanded === 1}
            onChange={handleAccordionChange(1)}
          >
            <AccordionSummary
              expandIcon={<BsChevronDown />}
              aria-controls='panel1bh-content'
              id='panel1bh-header-1'
            >
              <h4>Main Information</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item md={6} className='modal-main__body--item'>
                  <TextField
                    label='Title *'
                    type='text'
                    {...formik.getFieldProps('title')}
                    error={!!formik.errors.title && !!formik.touched.title}
                    helperText={
                      !!formik.errors.title && !!formik.touched.title
                        ? formik.errors.title
                        : ''
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} className='modal-main__body--item'>
                  <TextField
                    label='Slug *'
                    {...formik.getFieldProps('slug')}
                    error={!!formik.errors.slug && !!formik.touched.slug}
                    helperText={
                      !!formik.errors.slug && !!formik.touched.slug
                        ? formik.errors.slug
                        : ''
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} className='modal-main__body--item'>
                  <Select
                    options={categoriesOption}
                    label={'Category *'}
                    placeholder={'Select'}
                    errorMessage={
                      !!formik.errors.categoryId && !!formik.touched.categoryId
                        ? formik.errors.categoryId
                        : ''
                    }
                    {...formik.getFieldProps('categoryId')}
                    onChange={formik.setFieldValue}
                    onBlur={formik.setFieldTouched}
                  />
                </Grid>
                <Grid item md={6} className='modal-main__body--item'>
                  <Select
                    options={topicsOption}
                    label={'Topic *'}
                    placeholder={'Select'}
                    errorMessage={
                      !!formik.errors.topicId && !!formik.touched.topicId
                        ? formik.errors.topicId
                        : ''
                    }
                    {...formik.getFieldProps('topicId')}
                    onChange={formik.setFieldValue}
                    onBlur={formik.setFieldTouched}
                  />
                </Grid>
                <Grid item md={6} className='modal-main__body--item'>
                  <TextField
                    label='Tags *'
                    {...formik.getFieldProps('tags')}
                    error={!!formik.errors.tags && !!formik.touched.tags}
                    helperText={
                      !!formik.errors.tags && !!formik.touched.tags
                        ? formik.errors.tags
                        : ''
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} className='modal-main__body--item'>
                  <Select
                    options={statusOptions}
                    label={'Status *'}
                    placeholder={'Select'}
                    errorMessage={
                      formik.touched.status ? formik.errors.status : ''
                    }
                    {...formik.getFieldProps('status')}
                    onChange={formik.setFieldValue}
                    onBlur={formik.setFieldTouched}
                  />
                </Grid>
                <Grid item md={6} className='modal-main__body--item'>
                  <p className='label-text mb-16'>Change Thumbnail</p>
                  <FileUpload
                    type='image'
                    onChange={(value: any) => setThumbnailFile(value)}
                    numberAllow={1}
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  className='modal-main__body--item'
                  style={{ overflow: 'hidden' }}
                >
                  <p className='label-text'>Thumbnail</p>
                  <img
                    src={formik.values.imageUrl}
                    alt='Invalid or empty thumbnail'
                    className='img-contain'
                  />
                </Grid>
                <Fragment>
                  <Grid item xs={6} md={3} className='modal-main__body--item'>
                    <TextField
                      label='Created Date'
                      type='text'
                      value={
                        formatDateFromApi(selectedCourse?.createdAt) || '--'
                      }
                      disabled
                    />
                  </Grid>
                  <Grid item xs={6} md={3} className='modal-main__body--item'>
                    <TextField
                      label='Updated Date'
                      type='text'
                      value={
                        formatDateFromApi(selectedCourse?.updatedAt) || '--'
                      }
                      disabled
                    />
                  </Grid>
                </Fragment>
                <Grid item md={12} className='modal-main__body--item'>
                  <TextField
                    label='Description'
                    type='text'
                    {...formik.getFieldProps('description')}
                    error={
                      !!formik.errors.description &&
                      !!formik.touched.description
                    }
                    helperText={
                      !!formik.errors.description &&
                      !!formik.touched.description
                        ? formik.errors.description
                        : ''
                    }
                    fullWidth
                    multiline
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item md={12} className='modal-main__body--item'>
          <Accordion
            expanded={expanded === 2}
            onChange={handleAccordionChange(2)}
          >
            <AccordionSummary
              expandIcon={<BsChevronDown />}
              aria-controls='panel1bh-content'
              id='panel1bh-header-1'
            >
              <h4>Pricing</h4>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item md={6} className='modal-main__body--item'>
                  <TextField
                    label='Price'
                    type='number'
                    {...formik.getFieldProps('price')}
                    error={!!formik.errors.price && !!formik.touched.price}
                    helperText={
                      !!formik.errors.price && !!formik.touched.price
                        ? formik.errors.price
                        : ''
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} className='modal-main__body--item'>
                  <TextField
                    label='Discount'
                    type='number'
                    {...formik.getFieldProps('discount')}
                    error={
                      !!formik.errors.discount && !!formik.touched.discount
                    }
                    helperText={
                      !!formik.errors.discount && !!formik.touched.discount
                        ? formik.errors.discount
                        : ''
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} className='modal-main__body--item'>
                  <TextField
                    label='Category Discount'
                    value={`${selectedCategory?.discountPercent || 0} %`}
                    fullWidth
                    disabled
                  />
                </Grid>
                <Grid item md={6} className='modal-main__body--item'>
                  <TextField
                    label='Topic Discount'
                    value={`${selectedTopic?.discountPercent || 0} %`}
                    fullWidth
                    disabled
                  />
                </Grid>
                <Grid item md={12} className='modal-main__body--item'>
                  <TextField
                    label='Total'
                    value={(
                      (formik.values.price - formik.values.discount) *
                      (1 - (selectedCategory?.discountPercent || 0) / 100) *
                      (1 - (selectedTopic?.discountPercent || 0) / 100)
                    ).toFixed(2)}
                    fullWidth
                    disabled
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <ConfirmModal
        open={showConfirmDeleteModal}
        onClose={handleCloseConfirmDeleteModal}
        // loading={courseState.loading}
        onCancel={handleCloseConfirmDeleteModal}
        height={150}
        content={
          <p>
            {'Are you sure you want to delete the course '}
            <b>{`'${selectedCourse?.title}'`}</b> {' ?'}
          </p>
        }
        onConfirm={handleDeleteAccount}
        position='justify-center'
        type='danger'
      />
      <Grid
        container
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        className='modal-main__footer'
      >
        <View isRow>
          <Button
            variant='outlined'
            className='has-text-danger'
            style={{ marginRight: '15px' }}
            onClick={handleShowConfirmDeleteModal}
          >
            Delete
          </Button>
        </View>
        <Button variant='contained' type='submit' color='primary'>
          {/* courseState.updateLoading || */}
          {uploadFileLoading && !showConfirmDeleteModal ? (
            <LoaderBall
              color1='#ffffff'
              color2='#eeeeee'
              color3='#ffffff'
              color4='#eeeeee'
              color5='#ffffff'
              height={18}
            />
          ) : (
            'Save'
          )}
        </Button>
      </Grid>
    </form>
  )
}

type Props = {
  selectedCourse: any | null
  onClose?: () => void
}
