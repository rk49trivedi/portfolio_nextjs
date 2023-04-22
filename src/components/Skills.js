import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Design Skills</div>
          <div className="subtitle">Creative ability</div>
        </div>
        {/* skills items */}
        <div className="skills percent">
          <ul>
            <li>
              <div className="name">Web Design</div>
              <div className="single-post-text">
                <p>
                  I have extensive experience in developing professional web designs using CSS, CSS3, HTML5, and the latest version of Bootstrap.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="single-post-text">
                <p>
                Sometimes, I am required to manage banners or images to be displayed on a website. I make every effort to edit or resize the images using Photoshop.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "60%" }}>
                  <span className="percent">60%</span>
                </div>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Language Skills</div>
          <div className="subtitle">Reading and writing</div>
        </div>
        {/* skills items */}
        <div className="skills dotted">
          <ul>
            <li>
              <div className="name">English</div>
              <div className="single-post-text">
                <p>
                  I have a basic knowledge of English and I can write and explain things easily.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "60%" }}>
                  <span className="percent">60%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Gujarati</div>
              <div className="single-post-text">
                <p>
                I can speak Gujarati fluently and I can write and explain things fluently.
                Gujarati is a language spoken primarily in the state of Gujarat in India.
                
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Hindi</div>
              <div className="single-post-text">
                <p>
                  I can speak Hindi fluently and I can write and explain things fluently.
                  Hindi is one of the official languages of India and is spoken by over 600 million people worldwide.
                  
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Marwadi</div>
              <div className="single-post-text">
                <p>
                  I can speak Marwadi fluently and I can explain things fluently.
                  Marwadi is a language spoken in the state of Rajasthan in India, primarily by the Marwari community.
                </p>
              </div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Coding Skills</div>
          <div className="subtitle">Developing on</div>
        </div>
        {/* skills items*/}
        <div className="skills circles">
          <ul>
            <li>
              <div className="progress p90">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage" />
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Laravel</div>
              <div className="single-post-text">
                <p>I have over 5 years of experience with Laravel and have developed more than 30 projects using this framework while working for a private company.</p>
              </div>
            </li>
            <li>
              <div className="progress p85">
                {" "}
                {/* p75 = 75% circle fill color */}
                <div className="percentage" />
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">PHP, MYSQL</div>
              <div className="single-post-text">
                <p>I have over 5 years of experience in PHP and have successfully developed more than 20 projects in a private company.</p>
              </div>
            </li>
            <li>
              <div className="progress p85">
                {" "}
                {/* p85 = 85% circle fill color */}
                <div className="percentage" />
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Wordpress</div>
              <div className="single-post-text">
                <p>I have over three years of experience with WordPress and have successfully completed more than 40 projects during my tenure at a private company.</p>
              </div>
            </li>
            <li>
              <div className="progress p80">
                {" "}
                {/* p80 = 80% circle fill color */}
                <div className="percentage" />
                <span>80%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Jquery</div>
              <div className="single-post-text">
                <p>I have experience in utilizing JQuery for form validation, AJAX implementation, and managing data tables.</p>
              </div>
            </li>
            <li>
              <div className="progress p95">
                {" "}
                {/* p95 = 95% circle fill color */}
                <div className="percentage" />
                <span>95%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">HTML, CSS, Bootstrap</div>
              <div className="single-post-text">
                <p>I have experience in utilizing HTML, CSS, and Bootstrap to design websites such as wedding sites, job portals, e-commerce platforms, marketing sites, and service-oriented websites.</p>
              </div>
            </li>
            <li>
              <div className="progress p70">
                {" "}
                {/* p90 = 90% circle fill color */}
                <div className="percentage" />
                <span>70%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="name">Codeigniter</div>
              <div className="single-post-text">
                <p>I have experience in managing websites using CodeIgniter.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
