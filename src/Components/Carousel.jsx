import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import Slide from "./Slide";

export default function Carousel() {
  return (
    <div className="container px-8 py-6 mx-auto rounded-2xl  overflow-hidden">
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
