import Work1 from "../../assets/Work1.webp";
import Work2 from "../../assets/Work2.png";
import Work3 from "../../assets/portfolio website.png";
import Work4 from "../../assets/blog-1.svg";
const Menu = [
	{
	  id: 1,
	  title: "Don’sPay Mobile Payment System",
	  image: Work1,
	  category: ["Frontend", "Backend","Spring Boot"],
	  duration: "Sep 2024 - Dec 2024",
	  description: "• Developed a mobile payment solution for campus transactions using React Native and Spring Boot. • Implemented QR code-based payments, real-time balance viewing, transaction history, and secure PIN-based login. • Optimized app performance with AsyncStorage caching and deployed using Render and Aiven for backend integration. • Integrated MySQL for secure, real-time database management and ensured seamless user experience.",
	  skills: ["React Native", "Spring Boot", "MySQL", "Render", "Aiven", "AsyncStorage"],
	  repositoryUrl: "https://github.com/Vijayagiridharan/Don-s-Pay",
	},
	{
	  id: 2,
	  title: "Food Truck Application",
	  image: Work2,
	  category: ["Backend"],
	  duration: "Jan 2024 - Apr 2024",
	  description: "• Developed a Flask-based application for managing user accounts, orders, and menu items with MySQL. • Implemented secure user authentication using SHA-256 for password hashing. • Enabled order and item management with CRUD functionalities, ensuring efficient data handling. • Wrote unit tests to validate user registration and order operations.",
	  skills: ["Python Flask", "MySQL", "Flask-SQLAlchemy", "Google Cloud Storage", "bcrypt", "PyMySQL"],
	  repositoryUrl: "https://github.com/Vijayagiridharan/Food-Truck-Application-API-",
	},
	{
	  id: 3,
	  title: "Portfolio Builder",
	  image: Work3,
	  category: ["Frontend", "Backend","Spring Boot"],
	  duration: "Sep 2023 - Dec 2023",
	  description: "• Developed a responsive web application for users to create portfolios from uploaded resumes or manual inputs. • Implemented token-based user authentication and dynamic portfolio preview functionality. • Designed resume parsing to extract key data from PDF files, ensuring seamless data integration. • Utilized React.js, Redux, and Cypress for frontend development, state management, and end-to-end testing.",
	  skills: ["React.js", "Spring Boot", "TypeScript", "MySQL", "Amazon RDS", "Render", "CSS", "Bootstrap", "Axios", "Cypress"],
	  repositoryUrl: "https://github.com/Shravan23/portfolio-builder",
	  url: "https://portfolio-builder-frontend.onrender.com/",
	},
	{
	  id: 4,
	  title: "Exigence Informer",
	  image: Work4,
	  category: ["Hardware", "IoT"],
	  duration: "Jan 2022 - Apr 2022",
	  description: "• This project involves a Raspberry Pi module equipped with a camera, GPS, GSM module, and a USB microphone to build an Exigence Informer. • It can process voice commands or recognize hand gestures to send emergency alerts via the social media application (Telegram app). • The alerts include photos, videos, or location information. • This solution eliminates the need for manual texting and provides a quicker response compared to other devices.",
	  skills: ["Secure Shell (SSH)", "OpenCV", "Raspberry Pi", "Python"],
	  url: "https://www.ijaresm.com/search?x=0&y=0&keyword2=Exigence",
	},
  ];
  
  export default Menu;
  