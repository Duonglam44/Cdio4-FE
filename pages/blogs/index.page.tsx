import { useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core'
import { BlogTabs } from './components/BlogTabs'
import { BlogContent } from './components/BlogContent'

const BlogPage = () => {
  const classes = useStyles()
  const [tab, setTab] = useState<number>(0)

  return (
    <div className={classes.wrap}>
      <div className='container'>
        <BlogTabs tabs={tabs} tab={tab} setTab={setTab} />
        <BlogContent />
      </div>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    wrap: {
      background: '#fff',
      padding: '30px 0',
    },
  })
)

const tabs = [
  {
    name: 'Suggested',
  },
  {
    name: 'Newest',
  },
  {
    name: 'Your blogs',
  },
]

export default BlogPage
