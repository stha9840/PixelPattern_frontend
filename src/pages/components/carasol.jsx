import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import slider1 from '../../assets/bg1.png.jpg';
import slider2 from '../../assets/bg2.png.jpg';
import slider3 from '../../assets/bg5,png.jpg';
import slider4 from '../../assets/bg4.png.jpg';
import slider5 from '../../assets/bg3,png.jpg';
import {FaSearch} from "react-icons/fa";

function Carousel() {
    const slideStyles = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '400px',

    };
    return (
        <div className="swiper-container">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{delay: 4000}}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}>

                <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider1})`, height: '100%'}}>

                </SwiperSlide>
                <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider2})`, height: '100%'}}>

                </SwiperSlide>
                <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider3})`, height: '100%'}}>

                </SwiperSlide>  <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider4})`, height: '100%'}}>

                </SwiperSlide>  <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider5})`, height: '100%'}}>

            </SwiperSlide>
            </Swiper>
            <div>
            </div>
        </div>
    );
}

export default Carousel