

import bg from "./assets/Pradeep.jpg"

const logotext = "DPK";
const meta = {
    title: "Pradeep Binwal",
    description: "I’m Pradeep Binwal Software Engineer _ Full stack devloper",
};

const introdata = {
    title: "I’m Pradeep Binwal",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third : "I love Designing"
        
    },
    description: "Experienced professional with expertise in a variety of fields including communication, problem solving and customer service .",
    
};

const dataabout = {
    title: "About my self",
    aboutme:"I am Pradeep Binwal, a recent graduate with a Bachelor of Technology in Computer Science Engineering from Graphic Era Hill University, Uttarakhand. Originally from Devkali, Nanakmatta, Uttarakhand, I have developed a strong foundation in web development, particularly in the MERN stack, and gained proficiency in languages such as Java, C++, and Python. Throughout my academic journey, I have worked on several impactful projects, honing my problem-solving and collaborative skills. I am eager to leverage my technical expertise and contribute to innovative solutions as I begin my professional career."
};
const worktimeline = [{
        jobtitle: "Bachelor of Technology in Computer Science Engineering(CGPA of 8.65)",
        where: "Graphic Era Hill University, Uttarakhand",
        date: "July 2020- July-2024",
    },
    {
        jobtitle: "Intermediate (81.4)",
        where: "Goshen School, Uttarakhand",
        date: "April 2019- April 2020",
    },
    {
        jobtitle: "High School (87.6)",
        where: " D.S.I.C Kunwapur , Uttarakhand",
        date: "April 2017- April 2018",
    },
];

const skills = [{
        name: "Java",
        value: 90,
    },
    {
        name: "C++",
        value: 65,
    },
    {
        name: "MongoDB",
        value: 80,
    },
    {
        name: "ExpressJs",
        value: 70,
    },
    {
        name: "NodeJs",
        value: 70,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 75,
    },
    {
        name: "Python",
        value: 50,
    },
    {
        name: "MySQL",
        value: 60,
    },
    {
        name: "HTML - CSS",
        value: 80,
    },
    
];

const services = [{
        title: "UI & UX Design",
        description: "Crafting intuitive, visually appealing interfaces with user-centric design principles. Prioritizing user experience through seamless navigation, clear communication, and engaging interactions. Implementing design elements to enhance usability and create meaningful interactions for optimal user satisfaction.",
    },
    {
        title: "WebSite Development",
        description: "We provide top-tier website development services, creating responsive, high-performance websites tailored to your needs. Specializing in modern design and functionality, we deliver visually appealing, fast-loading sites that enhance user experience and drive results. From personal portfolios to business solutions, we build websites that help you achieve your goals and stand out online."
    },
    {
        title: "Android App",
        description: "Creating dynamic Android applications that blend functionality with innovation. Leveraging cutting-edge technologies and industry best practices to deliver user-friendly experiences. From concept to deployment, ensuring robust performance, intuitive UI, and seamless integration with Android platforms for unparalleled user engagement.",
    },
];

const dataportfolio = [{
        img: require('./assets/1.png'),
        description: "The dashboard website displays data and metrics in a user-friendly interface..",
        link: "https://github.com/Dpkbinwal/DashBoard",
        category:'FrontEnd'
    },
    {
        img:  require('./assets/2.png'),
        description: "E-commerce websites facilitate online buying, selling, and transactions securely worldwide.",
        link: "https://github.com/Dpkbinwal/ShopZenith",
         category:'FullStack'
    },
    {
        img:  require('./assets/3.png'),
        description: "Expense tracker websites monitor, categorize, and analyze personal spending efficiently.",
        link: "https://github.com/Dpkbinwal/Bills-tracker",
         category:'FrontEnd'
    },

    {
        img:  require('./assets/4.png'),
        description: "Gym fitness websites offer workouts, tips, schedules, and community support.",
        link: "https://github.com/Dpkbinwal/Fitness_app",
         category:'FrontEnd'
    },
    {
        img:  require('./assets/5.png'),
        description: "Password generator websites create secure and randomized passwords for user accounts.",
        link: "https://github.com/Dpkbinwal/Password-Generator",
         category:'FrontEnd'
    },
    {
        img:  require('./assets/6.png'),
        description: "Memory matching game websites entertain and challenge players with cognitive exercises.",
        link: "https://github.com/Dpkbinwal/Memory-Matching-game",
         category:'FrontEnd'
    },
    {
        img:  require('./assets/7.png'),
        description: "Sorting algorithm visualizer websites demonstrate sorting processes with interactive graphics.",
        link: "https://github.com/Dpkbinwal/Sorting-alog-visualizer",
        category:'FrontEnd'
    },
    {
        img:  require('./assets/8.png'),
        description: "File sharing websites allow users to upload, download, and share files securely.",
        link: "#",
        category:'FullStack'
     },
    // {
    //     img:  require('./assets/9.png'),
    //     description: "Meal finder websites help users discover recipes based on dietary preferences.",
    //     link: "#",
    // },
    {
        img:  require('./assets/10.png'),
        description: "Task Manager App keep track of your tasks, perform CRUD operation ,used MERN Stack",
        link: "https://github.com/Dpkbinwal/TodoTaskApp",
         category:'FullStack'
    },
    // {
    //     img:  require('./assets/10.png'),
    //     description: "Task Manager App keep track of your tasks, perform CRUD operation ,used MERN Stack",
    //     link: "https://github.com/Dpkbinwal/TodoTaskApp",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "binwalp36@gmail.com",
    YOUR_FONE: "9368869800",
    description: "If in case given form doesn't work , mail me on binwalp36@gmail.com ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_hvnhwhe",
    YOUR_TEMPLATE_ID: "template_1ehurkb",
    YOUR_USER_ID: "4DkPw8OXU44Znew7O",
};

const socialprofils = {
    github: "https://github.com/Dpkbinwal",
    facebook: "https://www.facebook.com/deepak.binwal.98/",
    linkedin: "https://www.linkedin.com/in/pradeep-binwal-0163321a0/",
    twitter: "https://twitter.com/BinwalPradeep",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};