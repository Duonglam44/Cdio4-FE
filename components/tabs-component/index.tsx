import { Box } from '@material-ui/core'

type tabType = {
  id: number
  name: string
  slug?: string
}

interface IProps {
  title?: string
  tabs: tabType[]
  LabelRight?: any
  currentTabIdx?: number
  onClick?: (tab: number) => void
  className?: string
}

export const TabsComponent: React.FC<IProps> = ({
  title,
  tabs,
  currentTabIdx,
  onClick,
  LabelRight,
}) => {
  return (
    <Box className='tabs-cpn-wrap'>
      <h3 className='tabs-title'>{title}</h3>
      <Box className='tabs-cpn'>
        <Box className='tabs-left'>
          {tabs.map(item => (
            <Box
              className={`tab-cpn ${item.id === currentTabIdx && 'active'}`}
              key={item.id}
              onClick={() => onClick && onClick(item.id)}
            >
              {item.name}
            </Box>
          ))}
        </Box>
        <Box>{LabelRight}</Box>
      </Box>
    </Box>
  )
}
