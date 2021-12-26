import { makeStyles, createStyles } from "@material-ui/core"
import { Pagination } from "@material-ui/lab"

interface IPagination {
  count: number
  onChangePage: (page: number) => void
  page: number
  className?: string
}

export const PaginationItem: React.FC<IPagination> = ({
  count,
  page,
  onChangePage,
  className,
}) => {

  const classes = useStyles()

  return (
    <Pagination
      className={`${classes.pagination} ${className}`}
      count={count}
      onChange={(e, p) => {
        onChangePage(p)
      }}
      page={page}
    />
  )
}
const useStyles = makeStyles((theme: any) =>
  createStyles({
    pagination: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: '10px 0',
      "&  .Mui-selected": {
        color: theme.palette.secondary.main,
        background: '#fff'
      },
      '& .MuiPaginationItem-root': {
        borderRadius: 5,
        border: '1px solid',
      }
    },
  })
)
