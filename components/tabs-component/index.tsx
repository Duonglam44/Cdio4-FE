import { Box } from '@material-ui/core'

type tabType = {
  id: number,
  name: string,
}

interface IProps {
  title?: string
  tabs: tabType[]
  currentTabIdx: number
  onClick: (tab: number) => void
  className?: string
}

export const TabsComponent: React.FC<IProps> = ({ title, tabs, currentTabIdx, onClick }) => {
  return (
    <Box className='tabs-cpn'>
      <h3 className='tabs-title'>{title}</h3>
      {tabs.map(item => (
        <Box className={`tab-cpn ${item.id === currentTabIdx && 'active'}`} key={item.id}
          onClick={() => {
            onClick(item.id)
          }}
        >
          {item.name}
        </Box>
      ))}
    </Box>
  )
}
