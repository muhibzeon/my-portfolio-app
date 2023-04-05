import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  springboot,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  aiub,
  uninow,
  shopify,
  carrent,
  coffee,
  recipe,
  emaily,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "BackEnd Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Teaching Assitant - Java",
    company_name: "American International Uniersity Bangladesh",
    icon: aiub,
    iconBg: "#383E56",
    date: "January 2016 - December 2016",
    points: [
      "I worked as a teaching assistant.",
      "Helping the Professor to take lectures and prepare the exercises of Object Oriented Programming(Java) Exercise class.",
      "Provide and discuss the solutions of the exercises.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "UniNow",
    icon: uninow,
    iconBg: "#383E56",
    date: "June 2022 - December 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing atomic responsive design.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Email Survey Application",
    description:
      "Web Application that allows user to register and do an email survey for their company or product.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: emaily,
    source_code_link:
      "https://github.com/muhibzeon/Email-Survey-app-ReactJs-NodeJs",
  },
  {
    name: "Find Recipes",
    description:
      "JavaScript application that enables users to search for many different Recipes, view recipe ingredients amounts necessary and directions",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/muhibzeon",
  },
  {
    name: "Discover Coffee Stores",
    description:
      "A restaurant Application that tracks the users location and returns the location and reviews of the Cafes nearby.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "airtable",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: coffee,
    source_code_link: "https://github.com/muhibzeon/discover-coffee-stores",
  },
];

export { services, technologies, experiences, testimonials, projects };
