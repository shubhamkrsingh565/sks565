/* eslint-disable react-refresh/only-export-components */
import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const Info = {
    name: "Shubham Kumar Singh",
    stack: ["Software Engineer", "Full Stack Web Developer", "Freelancer", "Competitive Programmer"],
    bio: "I'm a dedicated software engineer specializing in building efficient, scalable solutions and delivering high-quality web applications. With a passion for innovation and excellence, I also offer freelance services designed to exceed client expectations. Let’s connect and bring your vision to life!"
}

const ProjectInfo = [
    {
        title: "Shopping E-comm App",
        desc: "The Shopping Website is a fully responsive e-commerce platform built using React, Redux, TypeScript, TailwindCSS, Node.js, and MongoDB, offering a seamless shopping experience across all devices. It includes features like adding items to the cart, sorting products by various criteria, and a secure billing process with form validation for address and payment details. Users can browse, search for specific products, and manage their purchases effortlessly, ensuring accuracy and security at every step. The platform also supports dynamic inventory management and real-time updates, enhancing usability and reliability. Its intuitive interface, robust state management, and efficient backend integration provide a fast and user-friendly experience. Designed for scalability and maintainability, the application is a perfect fit for modern online retail businesses.",
        image: "shopping.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "TailwinCSS", "JavaScript", "TypeScript", "Node Js"],
        link: "https://go-eshopping.netlify.app/",
        github: "https://go-eshopping.netlify.app/"
    },
    {
        title: "Employee Management System",
        desc: "The Employee Management System is a modern, fully responsive application built using React, TailwindCSS, Node.js, and MongoDB, designed to streamline employee management processes. It features secure user authentication with login, registration, and logout functionalities for both administrators and employees. Admin can efficiently manage employee records, including adding, updating, and removing employees, while employees can view and update their profiles. The system supports advanced search and sorting options to locate specific employee data quickly. With real-time validations for inputs like personal details and role assignments, the platform ensures data accuracy and security. The application provides a seamless and user-friendly experience, offering features like role-based access control, department management, and attendance tracking. Its sleek design and scalable architecture make it an ideal solution for modern organizations to enhance workforce management and operational efficiency.",
        image: "ems.png",
        live: true,
        technologies: ["React", "Redux", "LocalStorage", "Tailwind", "Tabler-Icons", "Firebase"],
        link: "https://e-management-system.vercel.app/",
        github: "https://github.com/shubhamkrsingh565/ems"
    },
    {
        title: "Meal Mates Food App",
        desc: "The Food Delivery App is a modern, fully responsive platform built using React, TailwindCSS, Node.js, and MongoDB, designed to provide a seamless food ordering and delivery experience across all devices. It features secure user authentication with login, registration, and logout functionalities for customers and delivery partners. Customers can browse restaurants, search for specific dishes, add items to their cart, and place orders with a smooth checkout process that includes address and payment validation. Delivery partners can manage delivery assignments, update order statuses, and track earnings in real time. The app supports advanced sorting and filtering options, such as cuisine type, price range, and customer ratings, ensuring users can easily find what they need. With its sleek design, efficient state management, and scalable backend, the Food Delivery App is an all-in-one solution for modern food delivery services, enhancing user satisfaction and operational efficiency.",
        image: "Meat-mates.png",
        live: true,
        technologies: ["React", "Redux", "Tailwind", "Tabler-Icons", "TypeScript", "JavaScript"],
        link: "https://mealmatesapp.netlify.app/",
        github: "https://github.com/shubhamkrsingh565/meal-mates-Food-App"
    },
    {
        title: "Travel Website",
        desc: "The Travel Booking Website is a modern, fully responsive platform built using React, Redux, TailwindCSS, and MongoDB, designed to simplify the process of planning and booking travel experiences. It features secure user authentication with login, registration, and logout functionalities, ensuring personalized access for customers and administrators. Users can browse destinations, search for travel packages, and book flights, hotels, and tours through a streamlined booking process with real-time availability checks and payment validation. The platform also provides advanced filtering and sorting options by destination, budget, or activity type, helping users find the perfect travel experience. Administrators can manage travel packages, bookings, and user accounts with ease. The website also includes a review and rating system for destinations and services, empowering users to make informed decisions. Combining a sleek design, robust functionality, and scalable architecture, this platform ensures a smooth and enjoyable experience for travel enthusiasts and administrators alike.",
        image: "travels.png",
        live: true,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://travelwale.netlify.app/",
        github: "https://github.com/shubhamkrsingh565/travel-website"
    },
    {
        title: "ATM Management System",
        desc: "ATM Management System is a robust desktop application built using Java and JDBC, designed to optimize banking operations. The system allows administrators to securely manage customer accounts, property records, and transaction histories with full CRUD functionality. Featuring an intuitive interface, it ensures efficient processing of account activities, property tracking, and transactional data. This application enhances operational efficiency while maintaining data integrity and security, making banking administration seamless and reliable.",
        image: "atm.jpg",
        live: false,
        technologies: ["Java", "Springboot", "JDBC", "Heroicons", "Firebase", "MongoDB"],
        link: "https://github.com/shubhamkrsingh565/Bank-Management-System-ATM",
        github: "https://github.com/shubhamkrsingh565/Bank-Management-System-ATM"
    },
    {
        title: "HTML CSS Portfolio",
        desc: "The Portfolio Website is a sleek and fully responsive platform designed using only HTML and CSS to showcase personal or professional achievements. It features an intuitive layout with sections for an about page, skills, projects, and contact information, providing visitors with a clear overview of the creator's work and expertise. With elegant styling, responsive design, and smooth navigation, the website ensures a seamless user experience across devices. This lightweight and visually appealing portfolio is ideal for creating a strong online presence while highlighting individuality and professional skills.",
        image: "htmlportfolio.gif",
        live: false,
        technologies: ["React", "Tailwind", "Ace Editor"],
        link: "https://anuranjan-kumar.netlify.app/",
        github: "https://github.com/shubhamkrsingh565/anuranjan"
    }
]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Redux", "Tailwind CSS", "GSAP", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
    }
]
const socialLinks = [
    { link: "https://github.com/shubhamkrsingh565", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/shubhamkrsingh565", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/shubhamksingh_", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/@shubhamkrsingh", icon: IconBrandYoutube },
    { link: "https://www.leetcode.com/u/shubhamkrsingh565", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Full-Stack Web Developer",
        company: "Freelancer",
        date: "Nov 2023 - Present",
        desc: "As a freelancer, I delivered end-to-end web development solutions using a robust tech stack, including React.js, Redux, JavaScript, TypeScript, Tailwind CSS, CSS3, Node.js, SQL (MySQL), and Django. I created responsive, user-friendly interfaces and dynamic applications while ensuring seamless integration between frontend and backend systems. By leveraging modern frameworks and best practices, I optimized performance, enhanced code quality, and met client-specific requirements. Through effective collaboration and proactive problem-solving, I provided scalable, high-quality solutions tailored to diverse project needs.",
        skills: ["React Js", "Redux", "JavaScript(ES6+)", "Node Js", "Java", "MongoDB", "MySQL", "Tailwind CSS", "Git", "SQL",  "RESTful APIs", "Firebase", "GitHub"]
    },
    {
        role: "Production Engineer",
        company: "LTIMindtree",
        date: "May 2024 - Present",
        desc: "I led production support initiatives leveraging ITIL practices and a diverse tech stack, including SQL, MySQL, and Auto-SYS. I ensured system reliability by monitoring and optimizing workflows, resolving critical issues promptly, and streamlining operations. Collaborating with cross-functional teams, I improved performance, minimized downtime, and enhanced the overall user experience through proactive maintenance and efficient incident management.",
        skills: ["SQL", "Auto-SYS", "MySQL", "MongoDB", "ITIL"]
    },
    {
        role: "Inventory Executive",
        company: "Milkbasket",
        date: "Feb 2024 - May 2024",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["SQL", "Excel", "Google Sheets", "Tableau", "SAP", "Reporting"]
    },
    {
        role: "Trainee (Java)",
        company: "Mindtree",
        date: "Feb 2023 - May 2023",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["Java", "JavaScript", "HTML", "CSS", "Angular", "Git", "MySQL", "MongoDB"]
    }
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };

