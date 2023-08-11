import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import { Link } from "react-router-dom"

const CarouselProduct = () => {
  return (
    <div className="bg-white m-3">
    <div className="text-2xl font-semibold p-3">Best Sellers</div>
            <Swiper
                  slidesPerView={5}
                  spaceBetween={10}
                  navigation={true}
                  modules={{Navigation}}
            >
                  {
                        Array.from ({ length:9}, (_, i) => 
                              <SwiperSlide key={i}>
                                    <Link to={`/product/${i}`}>
                                       <img src={`../images/product_${i}_small.jpg`} alt="" />
                                    </Link>

                              </SwiperSlide>
                        )
                  }
            </Swiper>
    </div>
  )
}

export default CarouselProduct
