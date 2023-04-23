const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">Services</div>
          <div className="subtitle">What I Do</div>
        </div>
        {/* services items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className=" fab fa-chrome" />
              </div>
              <div className="name">
                Laravel <br />
                Web Development
              </div>
              <div className="single-post-text">
                <p>
                  I can create best professional Building modern and user friendly websites.
                  this is my laravel portfolio project
                </p>
                
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="icon fab fa-chrome" />
              </div>
              <div className="name">
                Wordpress <br />
                Development
              </div>
              <div className="single-post-text">
                <p>
                Developing WordPress themes and plugins. Assisting in the Website performance. 
                In addition to my experience, I have a solid educational foundation and a passion for programming.
                </p>
                
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="icon fab fa-chrome" />
              </div>
              <div className="name">
                React web <br />
                Development
              </div>
              <div className="single-post-text">
                <p>
                  The web development process includes: web design, web content,
                  client-side / server-side scripting and network security
                  configuration.
                </p>
                
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item">
              <div className="icon">
                <i className="icon fab fa-chrome" />
              </div>
              <div className="name">
                PHP web <br />
                Development
              </div>
              <div className="single-post-text">
                <p>
                  I am well-versed in WordPress, Php, CSS3, HTML5, Bootstrap and API Integration.
                </p>
                
              </div>
            </div>
          </div>
         
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;
