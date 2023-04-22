import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
const Works = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-col");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".box-items", {
        itemSelector: ".box-col",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  return (
    <div className="section works" id="section-portfolio">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Portfolio</div>
          <div className="subtitle">Latest works</div>
        </div>
        {/* filter */}
        <div className="filter-menu">
          <div className="filters">
            <div className="btn-group">
              <label
                data-text="All"
                className={`c-pointer ${activeBtn("box-col")}`}
                onClick={handleFilterKeyChange("box-col")}
              >
                <input type="radio" name="fl_radio" defaultValue=".box-col" />
                All
              </label>
            </div>
            <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("f-business")}`}
                onClick={handleFilterKeyChange("f-business")}
                data-text="Business"
              >
                <input type="radio" name="fl_radio" defaultValue=".f-business" />
                Business
              </label>
            </div>
            <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("f-company")}`}
                onClick={handleFilterKeyChange("f-company")}
                data-text="company"
              >
                <input type="radio" name="fl_radio" defaultValue=".f-company" />
                IT company
              </label>
            </div>
            <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("f-portfolio")}`}
                onClick={handleFilterKeyChange("f-portfolio")}
                data-text="portfolio"
              >
                <input type="radio" name="fl_radio" defaultValue=".f-portfolio" />
                Portfolio
              </label>
            </div>
            <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("f-estate")}`}
                onClick={handleFilterKeyChange("f-estate")}
                data-text="estate"
              >
                <input type="radio" name="fl_radio" defaultValue=".f-estate" />
                Real Estate
              </label>
            </div>
            <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("f-galleryplugin")}`}
                onClick={handleFilterKeyChange("f-galleryplugin")}
                data-text="galleryplugin"
              >
                <input type="radio" name="fl_radio" defaultValue=".f-galleryplugin" />
                Gallery Plugin
              </label>
            </div>
            {/* <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("f-gallery")}`}
                onClick={handleFilterKeyChange("f-gallery")}
                data-text="Gallery"
              >
                <input type="radio" name="fl_radio" defaultValue=".f-gallery" />
                Gallery
              </label>
            </div> */}
            {/* <div className="btn-group">
              <label
                className={`c-pointer ${activeBtn("f-content")}`}
                onClick={handleFilterKeyChange("f-content")}
                data-text="Content"
              >
                <input type="radio" name="fl_radio" defaultValue=".f-content" />
                Content
              </label>
            </div> */}
          </div>
        </div>
        {/* portfolio items */}
        <div className="box-items">
          {/* <div className="box-col f-gallery">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-1" className="has-popup-gallery">
                  <img src="images/works/work1.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-images" />
                      </span>
                    </span>
                  </span>
                </a>
                <div id="gallery-1" className="mfp-hide">
                  <a href="images/works/work1.jpg" />
                  <a href="images/works/work2.jpg" />
                  <a href="images/works/work3.jpg" />
                  <a href="images/works/work4.jpg" />
                </div>
              </div>
              <div className="desc">
                <div className="category">Gallery</div>
                <a href="#gallery-1" className="name has-popup-gallery">
                  Alabaster Complete Collection
                </a>
              </div>
            </div>
          </div> */}
          {/* <div className="box-col f-video">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.youtube.com/embed/S4L8T2kFFck"
                  className="has-popup-video"
                >
                  <img src="images/works/work2.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-video" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Video</div>
                <a
                  href="https://youtu.be/S4L8T2kFFck"
                  className="name has-popup-video"
                >
                  Book of John Paper
                </a>
              </div>
            </div>
          </div> */}
          {/* <div className="box-col f-image">
            <div className="box-item">
              <div className="image">
                <a href="images/works/work1.jpg" className="has-popup-image">
                  <img src="images/works/work1.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-image" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Image</div>
                <a
                  href="images/works/work7.jpg"
                  className="name has-popup-image"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div> */}

          <div className="box-col f-portfolio">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://roshan-trivedi-portfolio.pages.dev/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work1.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Portfolio</div>
                <a href="https://roshan-trivedi-portfolio.pages.dev/" target="_blank" className="name has-popup-link">
                  Portfolio website
                </a>
              </div>
            </div>
          </div>
          <div className="box-col f-company">
            <div className="box-item">
              <div className="image">
                <a href="images/works/work4.jpg" className="has-popup-image">
                  <img src="images/works/work4.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-image" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">IT company</div>
                <a
                  href="images/works/work4.jpg"
                  className="name has-popup-image"
                >
                  Logo Bakery Company
                </a>
              </div>
            </div>
          </div>
          <div className="box-col f-estate">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://thekanu.in/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work5.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Business</div>
                <a href="https://thekanu.in/" target="_blank" className="name has-popup-link">
                  Real Estate Property Site
                </a>
              </div>
            </div>
          </div>
          <div className="box-col f-company">
            <div className="box-item">
              <div className="image">
                <a href="images/works/work2.jpg" className="has-popup-image">
                  <img src="images/works/work2.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-image" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">IT company</div>
                <a
                  href="images/works/work2.jpg"
                  className="name has-popup-image"
                >
                  Twins Logo Degign Company
                </a>
              </div>
            </div>
          </div>
          {/* <div className="box-col f-gallery">
            <div className="box-item">
              <div className="image">
                <a href="#gallery-2" className="has-popup-gallery">
                  <img src="images/works/work5.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-images" />
                      </span>
                    </span>
                  </span>
                </a>
                <div id="gallery-2" className="mfp-hide">
                  <a href="images/works/work2.jpg" />
                  <a href="images/works/work3.jpg" />
                  <a href="images/works/work3.jpg" />
                  <a href="images/works/work4.jpg" />
                </div>
              </div>
              <div className="desc">
                <div className="category">Gallery</div>
                <a href="#gallery-2" className="name has-popup-gallery">
                  Brown Short Dog
                </a>
              </div>
            </div>
          </div> */}
          {/* <div className="box-col f-music">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                  className="has-popup-music"
                >
                  <img src="images/works/work6.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-music" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Music</div>
                <a
                  href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
                  className="name has-popup-music"
                >
                  Brown Concrete Building
                </a>
              </div>
            </div>
          </div> */}
          <div className="box-col f-business">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://lokx.ai/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work3.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Business</div>
                <a href="https://lokx.ai/" target="_blank" className="name has-popup-link">
                  WOSB Business Website
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-galleryplugin">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.tdsreisen.de/anthyllion-villa-lefokastro-pilion/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work7.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Plugin</div>
                <a href="https://www.tdsreisen.de/anthyllion-villa-lefokastro-pilion/" target="_blank" className="name has-popup-link">
                  Gallery Plugin
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-business">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.39k.group/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work8.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Business</div>
                <a href="https://www.39k.group/" target="_blank" className="name has-popup-link">
                  Business Website
                </a>
              </div>
            </div>
          </div>

          <div className="box-col f-galleryplugin">
            <div className="box-item">
              <div className="image">
                <a
                  href="https://www.hyvesthomes.com/"
                  className="has-popup-link"
                  target="_blank"
                >
                  <img src="images/works/work6.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-link" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Plugin</div>
                <a href="https://www.hyvesthomes.com/" target="_blank" className="name has-popup-link">
                  Wordpress Gallery Plugin
                </a>
              </div>
            </div>
          </div>

          {/* <div className="box-col f-content">
            <div className="box-item">
              <div className="image">
                <a href="#popup-1" className="has-popup-media">
                  <img src="images/works/work8.jpg" alt="" />
                  <span className="info">
                    <span className="centrize full-width">
                      <span className="vertical-center">
                        <i className="icon fas fa-plus" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
              <div className="desc">
                <div className="category">Content</div>
                <a href="#popup-1" className="name has-popup-media">
                  Yellow and Blue Striped
                </a>
              </div>
              <div id="popup-1" className="popup-box mfp-fade mfp-hide">
                <div className="content">
                  <div className="image">
                    <img src="images/works/work8.jpg" alt="" />
                  </div>
                  <div className="desc">
                    <div className="category">Content</div>
                    <h4>Yellow and Blue Striped</h4>
                    <p>
                      Consul latine iudicabit eu vel. Cu has animal eruditi
                      voluptatibus. Eu volumus explicari sed. Mel mutat
                      vituperata suscipiantur et, et fabellas explicari
                      adipiscing quo, no mucius euismod vis. Cu vim quem quod
                      cibo.
                    </p>
                    <a href="#" className="btn">
                      <span className="animated-button">
                        <span>View Project</span>
                      </span>
                      <i className="icon fas fa-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Works;
