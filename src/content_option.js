

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
    aboutme: " I am Pradeep Binwal . I am Pursuing B.Tech in Computer Science Engineering from Graphic Era Hill University . I am currently in 4th year of my Academic . I am from Devkali , Nanakmatta , Uttarakhand    . I am  dedicated and committed to becoming a dependable and valuable team member.",
};
const worktimeline = [{
        jobtitle: "Bachelor of Technology in Computer Science Engineering(CGPA of 8.65)",
        where: "Graphic Era Hill University, Uttarakhand",
        date: "August 2020- Present",
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
        name: "Javascript",
        value: 70,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 65,
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
        description: "Expert website development services tailored to your needs. We specialize in creating responsive, high-performance websites that drive engagement and results. ",
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
    },
    {
        img:  require('./assets/2.png'),
        description: "E-commerce websites facilitate online buying, selling, and transactions securely worldwide.",
        link: "https://github.com/Dpkbinwal/ShopZenith",
    },
    {
        img:  require('./assets/3.png'),
        description: "Expense tracker websites monitor, categorize, and analyze personal spending efficiently.",
        link: "https://github.com/Dpkbinwal/Bills-tracker",
    },

    {
        img:  require('./assets/4.png'),
        description: "Gym fitness websites offer workouts, tips, schedules, and community support.",
        link: "https://github.com/Dpkbinwal/Fitness_app",
    },
    {
        img:  require('./assets/5.png'),
        description: "Password generator websites create secure and randomized passwords for user accounts.",
        link: "https://github.com/Dpkbinwal/Password-Generator",
    },
    {
        img:  require('./assets/6.png'),
        description: "Memory matching game websites entertain and challenge players with cognitive exercises.",
        link: "https://github.com/Dpkbinwal/Memory-Matching-game",
    },
    {
        img:  require('./assets/7.png'),
        description: "Sorting algorithm visualizer websites demonstrate sorting processes with interactive graphics.",
        link: "https://github.com/Dpkbinwal/Sorting-alog-visualizer",
    },
    {
        img:  require('./assets/8.png'),
        description: "File sharing websites allow users to upload, download, and share files securely.",
        link: "#",
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