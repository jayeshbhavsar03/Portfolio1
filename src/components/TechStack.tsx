import Marquee from "react-fast-marquee";
import "./styles/TechStack.css";
const techSkills = [
  { name: "Windows", img: "/images/1.png" },
  { name: "macOS / iOS", img: "/images/2.png" },
  { name: "Linux (Ubuntu, CentOS)", img: "/images/3.png" },
  { name: "Android", img: "/images/4.png" },
  { name: "Microsoft 365 Admin Center", img: "/images/5.png" },
  { name: "Exchange Online", img: "/images/6.png" },
  { name: "SharePoint", img: "/images/7.png" },
  { name: "Microsoft Teams", img: "/images/8.png" },
  { name: "OneDrive", img: "/images/9.png" },
  { name: "Azure / Entra ID", img: "/images/10.png" },
  { name: "Active Directory", img: "/images/11.png" },
  { name: "User & License Management", img: "/images/12.png" },
  { name: "Outlook", img: "/images/13.png" },
  { name: "Word", img: "/images/14.png" },
  { name: "Excel", img: "/images/15.png" },
  { name: "PowerPoint", img: "/images/16.png" },
  { name: "TeamViewer", img: "/images/17.png" },
  { name: "AnyDesk", img: "/images/18.png" },
  { name: "ServiceNow", img: "/images/19.png" },
  { name: "JIRA", img: "/images/20.png" },
  { name: "Zoho ManageEngine", img: "/images/21.png" },
  { name: "Zoho Desk", img: "/images/22.png" },
  { name: "Network Troubleshooting", img: "/images/23.png" },
  { name: "Hardware & Peripheral Support", img: "/images/24.png" },
  { name: "Python", img: "/images/25.png" },
  { name: "HTML", img: "/images/26.png" },
  { name: "CSS", img: "/images/27.png" },
  { name: "JavaScript", img: "/images/28.png" },
  { name: "PHP", img: "/images/29.png" },
  { name: "SQL", img: "/images/30.png" },
  { name: "PowerShell Scripting", img: "/images/31.png" },
  { name: "Google Apps Script", img: "/images/32.png" },
  { name: "CodeIgniter", img: "/images/33.png" },
  { name: "ReactJS", img: "/images/34.png" },
  { name: "WordPress", img: "/images/35.png" },
  { name: "Microsoft 365", img: "/images/36.png" },
  { name: "Google Workspace", img: "/images/37.png" },
];

const TechStack = () => {
  return (
    <div className="work-section" id="techstack" style={{ paddingBottom: '0' }}>
      <div className="work-container section-container">
        <h2>
          My <span>Techstack</span>
        </h2>
      </div>

      <div className="techstack-marquee-container">
        <Marquee speed={40} gradient={true} gradientColor="var(--backgroundColor)" gradientWidth={150} autoFill={true}>
          {techSkills.map((skill, index) => (
            <div className="tech-marquee-item" key={index}>
              <div className="tech-icon-wrapper">
                <img src={skill.img} alt={skill.name} />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
