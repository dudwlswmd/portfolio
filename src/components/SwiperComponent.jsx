import React from 'react'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperHome.scss';

// import './styles.css';

import { Navigation } from 'swiper/modules';

const SwiperComponent  = () => {
     
     return (
          <SwiperReact
          slidesPerView={'auto'}
          centeredSlides={true}
          navigation={true}
          spaceBetween={100}

          modules={[Navigation  ]}
          className="mySwiper"
          >
               <SwiperSlide>
                    <img src="/img/slide01.webp" alt='이미지' />
                    <dl>
                         <dt>CREATIVE</dt>
                         <dd>
                              저는 창의적이고 열정적이고 모험적이며 기발한 사람입니다. 
                              함께 프로젝트에 참여하며 환상적인 사람들과 협력면서 함께 도전하기에
                              좋은 인재 입니다. 귀사분들이 찾는 특별한 사람이 저였으면 좋겠습니다.
                         </dd>
                    </dl>
               </SwiperSlide>
               <SwiperSlide>
                    <img src="/img/slide01.webp" alt='이미지' />
                    <dl>
                         <dt>I DEA</dt>
                         <dd>
                              저는 행복하고, 거칠고, 활기차고, 수줍음이 많고, 괴짜이고, 예술적이고, 재미있는 사람입니다.
                              감성적이지 않고 의미 있는 웹앱을 만들기 위해 노력하며 좋은 경험을 위해 항상 도전하는 사람입니다.
                         </dd>
                    </dl>
               </SwiperSlide>
               <SwiperSlide>
                    <img src="/img/slide01.webp" alt='이미지' />
                    <dl>
                         <dt>DESIGN</dt>
                         <dd>
                              디자인과 퍼블리싱 경험을 바탕으로, 
                              저는 프로젝트를 진행할 때 높은 수준의 디자인 이해력을 활용하여 개발을 진행합니다. 
                              효율적인 업무 협업을 위해 최고 수준의 도구를 사용합니다. 
                              저와 함께 일하면 이러한 장점을 경험하실 수 있습니다
                         </dd>
                    </dl>
               </SwiperSlide>
               <SwiperSlide>
                    <img src="/img/slide01.webp" alt='이미지' />
                    <dl>
                         <dt>DESIGN</dt>
                         <dd>
                              디자인과 퍼블리싱 경험을 바탕으로, 
                              저는 프로젝트를 진행할 때 높은 수준의 디자인 이해력을 활용하여 개발을 진행합니다. 
                              효율적인 업무 협업을 위해 최고 수준의 도구를 사용합니다. 
                              저와 함께 일하면 이러한 장점을 경험하실 수 있습니다
                         </dd>
                    </dl>
               </SwiperSlide>


          </SwiperReact>
     )
}

export default SwiperComponent 