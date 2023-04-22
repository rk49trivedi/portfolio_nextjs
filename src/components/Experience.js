import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Experience = () => {
  return (
    <div className="section resume" id="section-experience">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Experience</div>
          <div className="subtitle">Working with</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.experience}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">Present</div>
                <div className="name">
                  Classicsoft <br />
                  Web technology
                </div>
                <div className="single-post-text">
                  <p>
                  I have acquired extensive experience in HTML, CSS, WordPress, and WordPress plugin development, which I credit to my tenure at Classicsoft Company. Currently, I hold the position of Senior Web Developer at the aforementioned organization.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2018-2020</div>
                <div className="name">
                  Santushti <br />
                  infotech
                </div>
                <div className="single-post-text">
                  <p>
                  Santushti Infotech Private Limited is a private company where I gained valuable experience and developed my skills in Laravel and Codeigniter frameworks.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2016-2018</div>
                <div className="name">
                  
                Erudite <br />
                Technologies
                </div>
                <div className="single-post-text">
                  <p>
                  This is my initial employment opportunity following college completion, during which I received fundamental training in HTML, CSS, and PHP. As a result of my unwavering commitment and diligent efforts, the company graciously extended me an offer for a permanent position within a mere 6-month timeframe.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="experience_prev prev fas fa-chevron-left" />
            <span className="experience_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Experience;
