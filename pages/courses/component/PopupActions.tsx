import { useState } from 'react'
import {
  Paper,
  Button,
  Modal,
  TextField,
  TextareaAutosize,
  formatMs,
} from '@material-ui/core'
import { AiTwotoneVideoCamera } from 'react-icons/ai'
import { TiDocumentText } from 'react-icons/ti'
import { IoMdAttach } from 'react-icons/io'
import { HiPlus } from 'react-icons/hi'
import { uploadFile } from '../../../redux/global/thunks'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { createChapter } from '../../../redux/lesson/thunks'

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required!'),
  description: yup.string(),
  url: yup.string().required('You have to upload attachment file!'),
  lessonId: yup.string().required('Lesson is required!'),
})

export const PopupActions: React.FC<{
  setFieldValue: any
  values: any
  lessonId: string
}> = ({ setFieldValue, values, lessonId }) => {
  const dispatch = useDispatch()
  const [isPopup, setIsPopup] = useState<boolean>(false)
  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  const formik = useFormik({
    validationSchema,
    initialValues: {
      lessonId,
      number: 1,
      title: '',
      url: '',
      description: '',
    },
    onSubmit: (values) => {
      dispatch(createChapter(values))
    },
  })

  return (
    <div style={{ position: 'relative' }}>
      <Button
        className='button-toggle'
        onClick={(e) => {
          setIsPopup(!isPopup)
        }}
      >
        <HiPlus />
      </Button>
      <Paper elevation={3} className={`${isPopup && 'show'} popup_wrap`}>
        <Button className='popup_item'>
          <div>
            <AiTwotoneVideoCamera />
            Video
            <input
              type='file'
              className='hiddenInput'
              onChange={(e) => {
                if (!e.target?.files?.[0]) return
                dispatch(
                  uploadFile(e.target?.files?.[0], (url) => {
                    setFieldValue('url', url)
                  })
                )
              }}
            />
          </div>
        </Button>
        <Button className='popup_item'>
          <div>
            <TiDocumentText />
            test
          </div>
        </Button>
        <Button
          className='popup_item'
          onClick={() => {
            setIsShowModal(true)
          }}
        >
          <div>
            <IoMdAttach />
            Attachment
          </div>
        </Button>
      </Paper>
      <Modal
        open={isShowModal}
        onClose={() => {
          setIsShowModal(false)
        }}
        className='modalAttachment'
      >
        <form onSubmit={formik.handleSubmit}>
          <Paper elevation={3} className='modalAttachment-paper'>
          <h3>Attachment Form</h3>
            <TextField
              type='text'
              label='Title'
              name='title'
              className='modalAttachment-field'
              onChange={formik.handleChange}
              value={formik.values.title}
              error={formik.touched.title && formik.errors.title ? true : false}
            />
            <Button
              variant='outlined'
              className={`chooseFile-btn ${
                formik.touched.url && formik.errors.url
                  ? 'error'
                  : ''
              }`}
            >
              {
                formik.values.url && 'Attachment Uploaded' || 'Add Attachment'
              }
              <input
                type='file'
                name='url'
                className='modalAttachment-field hidden'
                onChange={(e) => {
                  if (!e.target?.files?.[0]) return
                  dispatch(uploadFile(e.target.files[0], (res) => {
                    formik.setFieldValue('url', res)
                  }))
                }}
              />
            </Button>
            <p>Description</p>
            <TextareaAutosize
              name='description'
              minRows={4}
              className='modalAttachment-field'
              onChange={formik.handleChange}
              value={formik.values.description}
            />{' '}
            <div style={{ textAlign: 'right' }}>
              <Button variant='contained' type='submit'>
                Save Attachment
              </Button>
            </div>
          </Paper>
        </form>
      </Modal>
    </div>
  )
}
