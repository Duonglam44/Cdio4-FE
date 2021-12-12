import { useMemo, useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Input } from '../../../components/input'
import { TextareaAutosize, Snackbar } from '@material-ui/core'
import { FormButton } from '@components/Form-Button'
import { ButtonType } from '../../../types/componentTypes'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux'
import { BsUpload } from 'react-icons/bs'
import { createCourse } from '../../../redux/courses/thunks'
import { uploadFile } from '../../../redux/global/thunks'

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().max(300, 'mô tả không được quá 300 ký tự!'),
  price: yup.string().required(),
  categoryId: yup.string().required(),
  discount: yup.number(),
  image: yup.string().required('image is required!')
})

interface ICreate {
  setTab: (value: number) => void
  tab: number
}

export const CreateCourseForm: React.FC<ICreate> = ({ setTab, tab }) => {
  const categories = useSelector(
    (state: RootStateOrAny) => state.globalReducer.categories
  )
  const dispatch = useDispatch()
  const state = useSelector((state: RootStateOrAny) => state)

  const uploadedUrl = state.globalReducer.uploadedUrl

  const currentCreateCourseId = state.courseReducer.currentCreateCourseId

  const formik = useFormik({
    validationSchema,
    initialValues: {
      title: '',
      description: '',
      tags: [],
      price: '',
      discount: 0,
      categoryId: '',
      topicId: '',
      image: '',
    },
    onSubmit: (value) => {
      dispatch(createCourse(value))
    },
  })

  const { handleSubmit, handleChange, setFieldValue, values, errors, touched } =
    formik

  useEffect(() => {
    setFieldValue('image', uploadedUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadedUrl])

  const topics = useMemo(
    () => categories[values.categoryId]?.topics,
    [categories, values.categoryId]
  )

  return (
    <div className='newCourse'>
      <h2 className='title-page'>Create new course</h2>

      <form onSubmit={handleSubmit}>
        {touched.title && errors.title && (
          <span className='error'>{`* ${errors.title}`}</span>
        )}
        <Input
          className='input'
          type='text'
          name='title'
          onChange={handleChange}
          value={values.title}
          wrapperClass='input-box'
          label='title'
        />
        <div className='input-box'>
          <label htmlFor='image'>image</label>
          <FormButton
            className='upload-img'
            onClick={(e) => {
              document.getElementById('image')?.click()
            }}
          >
            <BsUpload />
          </FormButton>
          {uploadedUrl && (
            <img
              src={uploadedUrl}
              alt='course image'
              style={{ width: '150px', height: '150px' }}
            />
          )}
        </div>
        <input
          type='file'
          id='image'
          name='image'
          style={{ display: 'none' }}
          onChange={(e) => {
            if (!e?.target?.files?.[0]) return
            dispatch(
              uploadFile(e?.target?.files[0], () => {
                return
              })
            )
          }}
        />

        <div className='input-box'>
          <label htmlFor='description'>Description</label>
          <TextareaAutosize
            aria-label='empty textarea'
            className='input'
            name='description'
            minRows={4}
            placeholder='Add description here!'
            style={{ resize: 'none' }}
            onChange={handleChange}
            value={values.description}
          />
        </div>

        <div className='input-box'>
          <label htmlFor='categoryId' className='bit-label'>
            course category
          </label>
          <div style={{ width: '70%', textAlign: 'left' }}>
            <select
              name='categoryId'
              className='input-select'
              value={values.categoryId}
              onChange={handleChange}
            >
              <option value='choose' label='choose category' />
              {Object.values(categories)?.map((item: any, index) => (
                <option value={item?._id} label={item?.title} key={index} />
              ))}
            </select>
          </div>
        </div>

        <label className='big-label'>What is your course about?</label>

        <div
          role='group'
          aria-labelledby='my-radio-group'
          className='radio-group'
        >
          {topics?.map((item, idx) => (
            <label className='radio' key={idx}>
              <input
                type='radio'
                name='topicId'
                value={item._id}
                onChange={handleChange}
              />
              <span>{item.title}</span>
            </label>
          ))}
        </div>

        <label className='big-label' htmlFor='tags'>
          Tags
        </label>
        <div className='input-box'>
          <TextareaAutosize
            className='input'
            name='tags'
            minRows={3}
            style={{ resize: 'none', width: '100%' }}
          />
        </div>
        {touched.price && errors.price && (
          <span className='error'>{`* ${errors.price}`}</span>
        )}
        <Input
          className='input'
          type='number'
          name='price'
          onChange={handleChange}
          value={values.price}
          wrapperClass='input-box'
          label='number'
        />

        {touched.discount && errors.discount && (
          <span className='error'>{`* ${errors.discount}`}</span>
        )}
        <Input
          className='input'
          type='number'
          name='discount'
          onChange={handleChange}
          value={values.discount}
          wrapperClass='input-box'
          label='discount'
        />

        <div className='controls'>
          <FormButton className='button button--save' type={ButtonType.SUBMIT}>
            save
          </FormButton>
          <FormButton
            className='button button--next'
            type={ButtonType.BUTTON}
            onClick={() => {
              setTab(tab + 1)
            }}
            disabled={currentCreateCourseId ? false : true}
          >
            {'next >'}
          </FormButton>
        </div>
      </form>
    </div>
  )
}
