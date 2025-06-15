import Calculator from "../assets/images/Calculator.png";
import TodoList from "../assets/images/TodoList.png";
import AgeCalculator from "../assets/images/AgeCalculator.png";
import EmployeeManagementSystem from "../assets/images/EmployeeManagementSystem.png";
import OnlineBillingSystem from "../assets/images/OnlineBillingSystem.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Calculator",
      description:
        "A basic web-based calculator that performs simple arithmetic operations like addition, subtraction, multiplication, and division with a clean and user-friendly interface.",
      image: Calculator,
      technologies: ["HTML", "CSS", "Java Script", "Vite React"],
      liveUrl: "https://calculator-in-vite-and-react.vercel.app/",
      githubUrl:
        "https://github.com/barwin1510/Calculator-in-Vite-and-React/tree/main",
    },
    {
      id: 2,
      title: "Todo List",
      description:
        "A simple and interactive web-based Todo List application that allows users to add, edit, delete, and mark tasks as completed to help manage daily activities efficiently.",
      image: TodoList,
      technologies: ["HTML", "CSS", "Java Script", "Vite React"],
      liveUrl: "https://todo-list-in-vite-and-react.vercel.app/",
      githubUrl:
        "https://github.com/barwin1510/Todo_List_in_Vite_and_React/tree/main",
    },
    {
      id: 3,
      title: "Age Calculator",
      description:
        "A simple web application that calculates a users age based on their date of birth, displaying the result in years, months, and days.",
      image: AgeCalculator,
      technologies: ["HTML", "CSS", "Java Script", "Vite React"],
      liveUrl:
        "https://age-calculator-git-main-barwin1510s-projects.vercel.app/",
      githubUrl: "https://github.com/barwin1510/Age_Calculator/tree/main",
    },
    {
      id: 4,
      title: "Employee Management System",
      description:
        "A backend application built with Java and Spring Boot to manage employee data, roles, departments, and leaves. It supports CRUD operations, secure login (JWT), and RESTful APIs, integrated with a relational database using JPA/Hibernate.",
      image: EmployeeManagementSystem,
      technologies: ["Java", "Spring Boot", "MySQL"],
      githubUrl: "https://github.com/barwin1510/Employee_Management_System",
    },
    {
      id: 5,
      title: "Online Billing System",
      description:
        "A backend application built with Java and Spring Boot to manage employee data, roles, departments, and leaves. It supports CRUD operations, secure login (JWT), and RESTful APIs, integrated with a relational database using JPA/Hibernate.",
      image: OnlineBillingSystem,
      technologies: ["Java", "Spring Boot", "MySQL"],
      githubUrl: "https://github.com/barwin1510/Online_Billing_System",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
