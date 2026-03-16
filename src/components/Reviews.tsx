import { FaLinkedinIn } from "react-icons/fa6";
import "./styles/Reviews.css";

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    position: "IT Manager",
    company: "Tech Solutions Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "https://linkedin.com/in/johndoe",
    review: "Jayesh is an exceptional IT Support professional. His ability to quickly troubleshoot and resolve complex system issues minimized our downtime significantly. Highly recommended!"
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Director of Operations",
    company: "Global Enterprise",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "https://linkedin.com/in/janesmith",
    review: "Working with Jayesh has been a pleasure. He led our Microsoft 365 migration flawlessly and consistently demonstrates deep expertise in system administration."
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Senior System Administrator",
    company: "CloudTech",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    linkedin: "https://linkedin.com/in/michaeljohnson",
    review: "Jayesh's proactive approach to IT asset management and his skill with Azure Active Directory have been invaluable. He is a dedicated and reliable team member."
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Managing Director",
    company: "Innovate IT",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    linkedin: "https://linkedin.com/in/emilydavis",
    review: "I've been thoroughly impressed by Jayesh's problem-solving skills and his commitment to optimizing our IT infrastructure. He always goes above and beyond."
  }
];

const Reviews = () => {
  return (
    <div className="reviews-section" id="reviews">
      <div className="reviews-container section-container">
        <h2>
          Words from <span>Leadership</span>
        </h2>
        <div className="reviews-grid">
          {reviewsData.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-header">
                <div className="review-image">
                  <img src={review.image} alt={review.name} />
                </div>
                <div className="review-info">
                  <h3>{review.name}</h3>
                  <p className="review-position">{review.position}</p>
                  <p className="review-company">{review.company}</p>
                </div>
                <a href={review.linkedin} target="_blank" rel="noopener noreferrer" className="review-linkedin">
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="review-content">
                <p>"{review.review}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
