//Technologies logos
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoMongodb,
  BiLogoCss3,
  BiLogoGit,
} from "react-icons/bi";
import { FaNode, FaBootstrap, FaReact } from "react-icons/fa6";
import { SiExpress, SiMongoose, SiJsonwebtokens } from "react-icons/si";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

//Projects images
import proyectoec from "../assets/proyecto-ec.png";

const technologies = [
  {
    id: 1,
    logo: FaNode,
    title: "NODE JS",
  },
  {
    id: 2,
    logo: SiNextdotjs,
    title: "Next.js",
  },
  {
    id: 3,
    logo: FaReact,
    title: "REACT",
  },
  {
    id: 4,
    logo: BiLogoMongodb,
    title: "MONGO DB",
  },
  {
    id: 5,
    logo: SiExpress,
    title: "EXPRESS",
  },
  {
    id: 6,
    logo: BiLogoJavascript,
    title: "JAVASCRIPT",
  },
  {
    id: 7,
    logo: BiLogoGit,
    title: "GIT",
  },
  {
    id: 8,
    logo: SiMongoose,
    title: "MONGOOSE",
  },
  {
    id: 9,
    logo: BiLogoHtml5,
    title: "HTML",
  },
  {
    id: 10,
    logo: BiLogoCss3,
    title: "CSS",
  },
  {
    id: 11,
    logo: SiTailwindcss,
    title: "TailwindCSS",
  },
  {
    id: 12,
    logo: SiJsonwebtokens,
    title: "JWT",
  },
];

const projects = [
  {
    id: 1,
    title: "E-commerce MVC",
    img: proyectoec,
    deploy_url:
      "https://ecommercejuanignaciocolli-nachocolli1.b4a.run/productos",
    gitHub_url: "https://github.com/JuanIgnacio25/CoderHouse-ProyectoFinal",
    project_technologies:
      "Node.js, Express.js, MongoDB, Mongoose, Handlebars, Bootstrap 5, JWT, socket.io, Bcrypt",
  },
  // {
  //   id: 2,
  //   title: "E-commerce",
  //   img: proyectoec2,
  //   deploy_url:
  //     "https://ecommercejuanignaciocolli-nachocolli1.b4a.run/productos",
  //   gitHub_url: "https://github.com/JuanIgnacio25/CoderHouse-ProyectoFinal",
  //   project_technologies:
  //     "Node.js, Express.js, MongoDB, Mongoose, Handlebars, Bootstrap 5, JWT, socket.io, Bcrypt",
  // }
];

export { technologies, projects };
