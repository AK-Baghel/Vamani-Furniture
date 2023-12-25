import React from 'react'
import "./style.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Carousel() {

    const data = [
        "https://aarsunwoods.com/wp-content/uploads/2020/02/Wooden-Royal-Bedroom-Furniture-UH-ROYAL-0013.jpg",
        "https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-living-room-gray-light-background-image_2588953.jpg",
        "https://c4.wallpaperflare.com/wallpaper/502/299/662/vintage-bedroom-furniture-wallpaper-preview.jpg"
    ];

    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}

            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >

            {
                data.map((item, id) => {
                    return (
                        <SwiperSlide key={id}><img className='new' src={item} alt="" /></SwiperSlide>
                    )
                })
            }

        </Swiper>
    )
}

export default Carousel
