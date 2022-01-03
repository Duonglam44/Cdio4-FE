import { getStatusText } from 'utils/helpers'
import Table from 'rc-table'
import { AlignType } from 'rc-table/lib/interface'
import { createStyles, makeStyles } from '@material-ui/core'
interface Props {
  lessonsData: any
}

const columns = [
  {
    title: 'Lessons',
    dataIndex: 'title',
    key: 'title',
    width: '40%',
    align: 'left' as AlignType,
  },
  {
    title: 'Tests',
    dataIndex: 'tests',
    key: 'tests',
    width: '15%',
    align: 'center' as AlignType,
  },

  {
    title: 'Attachments',
    dataIndex: 'attachments',
    key: 'attachments',
    width: '15%',
    align: 'center' as AlignType,
  },
  {
    title: 'Comments',
    dataIndex: 'comments',
    key: 'comments',
    width: '15%',
    align: 'center' as AlignType,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: '15%',
    align: 'center' as AlignType,
  },
]

export const LessonsInfo: React.FC<Props> = ({ lessonsData }) => {
  const lessonsDataTable = lessonsData.map((lessonData, idx) => {
    return {
      ...lessonData,
      title: `${idx + 1}. ${lessonData.title}`,
      tests: lessonData.tests.length,
      attachments: lessonData.attachments.length,
      comments: lessonData.comments.length,
      status: getStatusText(lessonData.status),
    }
  })

  const handleRowClick = (record: any, index) => {
    // setSelectedCourseId(record._id)
    // await router.push(`/manage-courses/${record._id}`)
  }

  const classes = useStyles()

  return (
    <Table
      className={classes.table}
      rowKey={record => record._id}
      columns={columns}
      data={lessonsDataTable}
      onRow={(record, index) => ({
        onClick: () => handleRowClick(record, index),
        style: {
          cursor: 'pointer',
        },
      })}
    />
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    table: {
      width: '100%',
      '& table': {
        width: '100%',
      },
    },
  })
)
