import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../sliderProps";
const Education = () => {
  return (
    <div className="section resume" id="section-education">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Education</div>
          <div className="subtitle">Studied at</div>
        </div>
        {/* resume items */}
        <div className="content-carousel">
          <Swiper {...sliderProps.education}>
            <SwiperSlide className="item">
              <div className="resume-item active">
                <div className="date">1999-2008</div>
                <div className="name">
                  Jay Vijay school <br />
                  India
                </div>
                <div className="single-post-text">
                  <p>
                  I pursued my education up to S.S.C from this Gujarati medium school and achieved a score of 72% on the S.S.C exam.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2009-2011</div>
                <div className="name">
                  Sarvodaya  <br />
                  science school
                </div>
                <div className="single-post-text">
                  <p>
                  After completing my secondary school education (S.S.C), I began my higher secondary education (H.S.C) at Sarvodaya Science School, where I pursued Mathematics and achieved a 60% pass rate. 
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="resume-item">
                <div className="date">2012-2015</div>
                <div className="name">
                  B.H Gardi collage <br />
                  India
                </div>
                <div className="single-post-text">
                  <p>
                  After completing my Higher Secondary Education, I was accepted into B.H. Gardi College for a Bachelor of Engineering degree in Computer Science and Technologies.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
          {/* navigation */}
          <div className="navs">
            <span className="education_prev prev fas fa-chevron-left" />
            <span className="education_next next fas fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
