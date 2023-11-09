const meta = {
    title: "Bradley Snyder",
    description: "I'm a Software Developer currently working at PEL Supply.",
};

const introdata = {
    title: "Bradley Snyder",
    description: "Professional Software Developer since 2019",
};

const dataabout = {
    title: "About",
    aboutme: "I am an excellent team member. I have proven to work well with teammates of various skillsets and expertise.",
};
const worktimeline = [
    {
        jobtitle: "Application/Web Developer",
        where: "PEL Supply",
        date: "2022",
    },
    {
        jobtitle: "Software Developer",
        where: "Open Practice",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Java",
        value: 90,
    },
    {
        name: "SQL",
        value: 90,
    },
    {
        name: "Vue/Nuxt/Svelte",
        value: 85,
    },
    {
        name: "React",
        value: 80,
    },
    {
        name: "Postgres/Mongo",
        value: 75,
    },
];

const interests = [{
        title: "Full Stack Development",
        description: "In my career I have maintained and developed Python and Java applications. High level languages are something I like to study and stay up to date on what the industry standard might be tomorrow."   },
    {
        title: "Front End Frameworks",
        description: "I am always exploring the various Javascript frameworks and libraries to maintain efficiency when building user interfaces.",
    },
    {
        title: "Data Engineering",
        description: "I am proficient with maintaining and improving one of the most important assets of a business.",
    },
];


const school = [
    {
        name: 'The University of Akron', graduation_year: '2019',
        degree: 'Bachelor of Science in Computer Science'
    }]

const dataportfolio = [{
        img: "images/banner2.jpg",
        description: "Single page app made for a family member's business",
        link: "https://kayakron.com",
    },
];

const contactConfig = {
    YOUR_EMAIL: "1bradleysnyder@gmail.com",
    description: "Developer with four years of professional experience",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialProfiles = {
    github: "https://github.com/snyderbrad",
    linkedin: "https://linkedin.com/in/bradley-snyder/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialProfiles,
    interests,
    school
};
