import { Button, TextareaAutosize } from '@material-ui/core'
import { PopupActions } from './PopupActions'

export const LessonItem = () => {
  return (
    <>
      <div className='lessonItem-header'>
        <h5 className='lessonItem-title'>1. lessons</h5>
        <PopupActions />
      </div>
      <div className='lessonItem'>
        <video width='320' height='240' controls>
          <source
            src='https://www.w3schools.com/html/movie.mp4'
            type='video/mp4'
          />
        </video>
        <div className='lessonItem-box'>
          <h4>Test</h4>
          <div className='lessonItem-box__wrap'>
            <Button variant='outlined'>test 1</Button>
            <Button variant='outlined'>test 1</Button>
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
          placeholder="Type lesson's description here..."
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
