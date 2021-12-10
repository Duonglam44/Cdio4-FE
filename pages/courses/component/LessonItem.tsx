import { Button, TextareaAutosize } from '@material-ui/core'
import { PopupActions } from './PopupActions'
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  url: yup.string().required('You have to upload lesson video'),
  description: yup.string(),
  chapter: yup.string().required(),
})

export const LessonItem: React.FC<{lessonId: string}> = ({ lessonId }) => {
  const formik = useFormik({
    validationSchema,
    initialValues: {
      url: '',
      description: '',
      chapter: '',
    },
    onSubmit: (values) => { return },
  })

  const { handleSubmit, handleChange, setFieldValue, values } = formik

  return (
    <>
      <div className='lessonItem-header'>
        <h5 className='lessonItem-title'>1. lessons</h5>
        <PopupActions setFieldValue={setFieldValue} values={values}
          lessonId={lessonId}
        />
      </div>
      {/* <form action='' onSubmit={handleSubmit}></form> */}
      <div className='lessonItem'>
        {values.url && (
          <video width='320' height='240' controls>
            <source
              src={values.url}
              type='video/mp4'
            />
          </video>
        )}
        <div className='lessonItem-box'>
          <h4>Test</h4>
          <div className='lessonItem-box__wrap'>
            <Button variant='outlined'>test 1</Button>
          </div>
        </div>
        <div className='lessonItem-box'>
          <h4>Attachment</h4>
          <div className='lessonItem-box__wrap'>
            <Button variant='outlined'>Attachment 1</Button>
          </div>
        </div>
        <h4>Description</h4>
        <TextareaAutosize
          className='lessonItem-desc'
          aria-label='description'
          placeholder='Type lesson's description here...'
          minRows={5}
          style={{ resize: 'none', width: '100%' }}
        />
        <div style={{ textAlign: 'right' }}>
          <Button variant='contained'>Save Lesson</Button>
        </div>
      </div>
    </>
  )
}
