import { Button, createStyles, makeStyles } from '@material-ui/core'

interface IProps {
  tabs: []
  tab: number
  setTab: (tab: number) => void
}

export const UserTabs = ({ tabs, tab, setTab }) => {
  const classes = useStyles()

  return (
    <div className={classes.wrap}>
      {tabs.map((tab, idx) => (
        <Button
          variant='outlined'
          className={classes.tab}
          key={idx}
          onClick={() => {
            setTab(idx)
          }}
        >
          {tab.name}
        </Button>
      ))}
    </div>
  )
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    wrap: {
      background: '#fff',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 10,
      marginBottom: 20,
    },
    tab: {
      padding: '5px 20px',
      fontWeight: 400,
      borderRadius: 10,
      marginRight: 20,
    },
  })
)
