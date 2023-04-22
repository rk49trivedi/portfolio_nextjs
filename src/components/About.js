const About = () => {
  return (
    <div className="section about" id="section-about">
      <div className="content">
        {/* title */}
        <div className="titles">
          <div className="title">About Me</div>
          <div className="subtitle">My story</div>
        </div>
        {/* text */}
        <div className="cols">
          <div className="col">
            <div className="single-post-text">
              <p>
              Hi, I am a professional Web Developer and "Laravel,Codeigniter,PHP Export". 
              I have 8+ years experience in laravel and PHP programming language. 
              
              </p>
            </div>
          </div>
          <div className="col">
            <div className="single-post-text">
              <p>
              I am here to assist or support you for any kind of website related problem. 
              I also have experience about Wordpress and Wordpress plugin development. 
              
              </p>
            </div>
          </div>
          <div className="col col-full">
            <div className="single-post-text">
              <p>
              If you have any kind of confusion then contact me on Fiverr.
              </p>
            </div>
          </div>
        </div>
        {/* info list */}
        <div className="info-list">
          <ul>
            <li>
              <strong>Age:</strong> 30
            </li>
            <li>
              <strong>Residence:</strong> India
            </li>
            <li>
              <strong>Freelance:</strong> Available
            </li>
            <li>
              <strong>Address:</strong> Gujarat
            </li>
            <li>
              <strong>Phone:</strong> +91 9924 936 750
            </li>
            <li>
              <strong>E-mail:</strong> 49roshan@gmail.com
            </li>
          </ul>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
