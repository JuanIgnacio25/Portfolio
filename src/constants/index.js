//Technologies logos
import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoMongodb,
  BiLogoCss3,
  BiLogoGit,
} from "react-icons/bi";
import { FaNode, FaBootstrap, FaReact } from "react-icons/fa6";
import {
  SiExpress,
  SiMongoose,
  SiHandlebarsdotjs,
  SiJsonwebtokens,
} from "react-icons/si";
//Projects images
import proyectoec from "../assets/proyecto-ec.png";
import proyectoec2 from "../assets/proyecto-ec2.png";

const technologies = [
  {
    id: 1,
    logo: BiLogoJavascript,
    title: "JAVASCRIPT",
  },
  {
    id: 2,
    logo: BiLogoHtml5,
    title: "HTML",
  },
  {
    id: 3,
    logo: FaNode,
    title: "NODE JS",
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
    logo: BiLogoCss3,
    title: "CSS",
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
    logo: FaBootstrap,
    title: "BOOTSTRAP",
  },
  {
    id: 10,
    logo: FaReact,
    title: "REACT",
  },
  {
    id: 11,
    logo: SiHandlebarsdotjs,
    title: "HANDLEBARS",
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
