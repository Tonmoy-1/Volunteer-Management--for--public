import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import Slide from "./Slide";

export default function Carousel() {
  return (
    <div className="container px-8 py-4 mx-auto rounded-2xl  overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={img1}
            text="Empowering Communities Through Volunteer Action and Engagement"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img2}
            text="Empowering Communities Through Volunteer Action and Engagement"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img3}
            text="Empowering Communities Through Volunteer Action and Engagement"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img4}
            text="Empowering Communities Through Volunteer Action and Engagement"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img5}
            text="Empowering Communities Through Volunteer Action and Engagement"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
