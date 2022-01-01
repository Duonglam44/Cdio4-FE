import { createStyles, makeStyles } from '@material-ui/core'
import mockBlogs from './mockblogs.json'
import { BlogCard } from '@components/blog-card'

export const BlogContent = () => {

  const classes = useStyles()

  return (
    <div className={classes.wrap}>
      {
        mockBlogs.blogs?.map((blog, idx) => (
          <div key={idx} className={classes.blogs}>
            <BlogCard
              blog={blog}
            />
          </div>
        ))
      }
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    wrap: {},
    blogs: {
      marginBottom: 10,
      borderBottom: '1px solid #e6e6e6'
    }
  })
)
