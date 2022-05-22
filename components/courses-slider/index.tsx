import { makeStyles, createStyles } from '@material-ui/core'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import { CourseCard } from '@components/course-card'

interface ISlider {
  title?: string
  courses: []
  className?: string
}

export const CourseSlider: React.FC<ISlider> = ({
  title,
  courses,
  className,
}) => {
  const classes = useStyles()

  return (
    <div className={`${className}`}>
      {title && (
        <div className={classes.slideHeader}>
          <h1 className={classes.title}>{title}</h1>
          <span className={classes.link}>
            <Link href={'/courses'}>more courses</Link>
          </span>
        </div>
      )}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className={classes.slide}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        {courses?.map((course: any) => (
          <SwiperSlide key={course._id}>
            <CourseCard
              id={course._id}
              title={course.title}
              totalChapter={course.chapters.length}
              description={course.description}
              img={course.imageUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    slideHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    slide: {
      width: 'calc(100% + 20px)',
      marginLeft: -10,
      padding: '10px',
      '& .swiper-button-next': {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        borderRadius: '50%',
        border: '1px solid',
        height: 40,
        width: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        cursor: 'pointer',
        background: '#fff',
        color: '#000',
        right: 15,
        '&::after': {
          fontSize: 20,
          fontWeight: 600,
        },
      },
      '& .swiper-button-prev': {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 10,
        borderRadius: '50%',
        border: '1px solid',
        height: 40,
        width: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(5px)',
        cursor: 'pointer',
        background: '#fff',
        color: '#000',
        left: 15,
        '&::after': {
          fontSize: 20,
          fontWeight: 600,
        },
      },
    },
    link: {
      '& > a': {
        color: '#ff6000',
      },
    },
    title: {
      fontSize: 20,
      fontWeight: 500,
      padding: '5px 0',
    },
    controlButton: {},
    prev: {
      left: 15,
    },
    next: {
      right: 15,
    },
  })
)
