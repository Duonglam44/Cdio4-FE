import { Box, createStyles, makeStyles } from '@material-ui/core'

type tab = {
  name: string
}

interface IProps {
  tabs: tab[]
  tab: number
  setTab: (tab: number) => void
}

export const BlogTabs: React.FC<IProps> = ({ tabs, tab, setTab }) => {
  const classes = useStyles()

  return (
    <div className={classes.tabs}>
      {tabs.map((item, idx) => (
        <Box className={`${classes.tab} ${tab === idx && 'active'}`} key={idx}
          onClick={() => {
            setTab(idx)
          }}
        >
          {item.name}
        </Box>
      ))}
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    tabs: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderBottom: '1px solid #e6e6e6',
      marginBottom: 20,
    },
    tab: {
      padding: '10px 15px',
      cursor: 'pointer',
      '&.active': {
        color: '#000',
        fontWeight: 600,
        borderBottom: '2px solid',
      }
    },
  })
)
