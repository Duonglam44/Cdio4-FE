import { useRef } from 'react'
import { makeStyles, createStyles } from "@material-ui/core"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import { CourseCard } from "@components/course-card"
import { GrNext, GrPrevious } from "react-icons/gr"

interface ISlider {
  title?: string
  courses?: []
  className?: string
}

export const CourseSlider: React.FC<ISlider> = ({
  title,
  courses,
  className,
}) => {
  const classes = useStyles()
  const prevRef = useRef<HTMLDivElement>(null!)
  const nextRef = useRef<HTMLDivElement>(null!)

  return (
    <div className={className}>
      <div className={classes.slideHeader}>
        <h1 className={classes.title}>{title}</h1>
        <span className={classes.link}>
          <Link href={"/courses"}>more courses</Link>
        </span>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className={classes.slide}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        navigation={{
          nextEl: prevRef?.current,
          prevEl: nextRef?.current,
        }}
        pagination={{ clickable: true, el: ".swiper-pagination-main" }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
        <div
          ref={prevRef}
          slot='pagination'
          className={`${classes.controlButton} ${classes.prev}`}
        >
          <GrPrevious />
        </div>
        <div
          ref={nextRef}
          slot='pagination'
          className={`${classes.controlButton} ${classes.next}`}
          onClick={(e) => {
            console.log(e.target)
            console.log('ref' + nextRef.current)
          }}
        >
          <GrNext />
        </div>
      </Swiper>
    </div>
  )
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    slideHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    slide: {
      width: "calc(100% + 20px)",
      marginLeft: -10,
      padding: "10px",
    },
    link: {
      "& > a": {
        color: "#ff6000",
      },
    },
    title: {
      fontSize: 20,
      fontWeight: 500,
      padding: "5px 0",
    },
    controlButton: {
      fontSize: 20,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      borderRadius: "50%",
      border: "1px solid",
      height: 40,
      width: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "transparent",
      backdropFilter: "blur(5px)",
      cursor: "pointer",
    },
    prev: {
      left: 15,
    },
    next: {
      right: 15,
    },
  })
)
