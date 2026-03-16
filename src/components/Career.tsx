import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Executive</h4>
                <h5>Verve Advisory Pvt. Ltd.</h5>
              </div>
              <h3><span>May</span> 2023 - <span>Feb</span> 2024</h3>
            </div>
            <p>
              Provided technical support for users, troubleshooting issues related to Windows, macOS, Microsoft 365, and networking.
              Managed Microsoft 365 administration, user provisioning, and access control through Azure / Entra ID and Active Directory while improving IT operations through documentation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Executive</h4>
                <h5>Xcelerate Business Advisory LLP</h5>
              </div>
              <h3><span>March</span> 2024 - NOW</h3>
            </div>
            <p>
              Delivered IT help desk support by resolving hardware, software, Windows OS, and network connectivity issues for organizational users.
              Also assisted with user account management, system maintenance, IT asset tracking, and automation of internal workflows to improve operational efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
