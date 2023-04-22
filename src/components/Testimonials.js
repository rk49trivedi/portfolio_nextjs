import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Testimonials = () => {
  return (
    <div className="section testimonials" id="section-testimonials">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Reviews</div>
          <div className="subtitle">What customers say on Fiverr</div>
        </div>
        {/* testimonials items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.testimonials}>
          <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/rev2.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">hyvesthomes</div>
                  <div className="company">United States</div>
                </div>
                <div className="text">
                  Excellent work! Thanks so much for your help.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/rev1.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">imbhavin95</div>
                  <div className="company">India</div>
                </div>
                <div className="text">
                  He is amazing seller, He has great experience in Laravel also completed the task very quick. Highly recommend.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/revun.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">danishhasan456</div>
                  <div className="company">India</div>
                </div>
                <div className="text">
                We had our wix site redesigned. He was able to make changes as requested and we finalized a more aesthetically pleasing design. 
                I will recommend working with him as he is great for the professional fee range he operates in.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/revun.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">cvcook</div>
                  <div className="company">United States</div>
                </div>
                <div className="text">
                This person was very responsive to my needs and provided quick turnarounds on a many revisions. 
                I also had them advise directly with my hosting agent here in the U.S. and they did a fantastic job with that. 
                Will be using this team again and a long time into the future.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="reviews-item">
                <div className="image">
                  <img src="images/revun.png" alt="" />
                </div>
                <div className="info">
                  <div className="name">jeantds</div>
                  <div className="company">Greece</div>
                </div>
                <div className="text">
                I spent yesterday a lot of time to create a gallery that it will suit my needs. Without success. The seller did a very good job and very fast.
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="testimonials_prev prev fas fa-chevron-left" />
            <span className="testimonials_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
