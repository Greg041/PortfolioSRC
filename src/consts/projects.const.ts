import ProjectInfo from "src/interfaces/ProjectInfo.interface";
import instakash1 from "src/assets/works/instakash1.png";
import instakash2 from "src/assets/works/instakash2.png";
import instakash3 from "src/assets/works/instakash3.png";
import alfabc from "src/assets/works/invest_landing.jpg";
import devSearch from "src/assets/works/devsearch.jpg";
import geeksZone from "src/assets/works/geeks_zone.jpg";
import iqReader from "src/assets/works/iq_percentage_reader.png";
import forexBot from "src/assets/works/bot_forex.jpg";

export const PROJECTS: ProjectInfo[] = [
  {
    pagePath: "instakash",
    name: "Instakash",
    description:
      "Instakash es una plataforma intercambio de divisas localizada en Perú. " +
      "Trabajé como desarrollador backend creando desde cero " +
      "una plataforma de operaciones cambiarias para los empleados de Instakash " +
      "dedicada al intercambio de divisas para empresas localizadas en el país." +
      "Además de corregir bugs presentados en la plataforma principal usada por los usuarios naturales.",
    projectImages: [instakash1, instakash2, instakash3],
    projectUrl: "https://instakash.net/",
    technologies: [
      "Javascript",
      "Typescript",
      "NodeJS",
      "NestJS",
      "Postgres",
      "Redis",
    ],
  },
  {
    pagePath: "alfabc",
    name: "Invest Alfabc",
    description: "",
    projectImages: [alfabc],
    projectUrl: "",
    technologies: ["Python", "Django", "HTML", "CSS", "Javascript", "HTMX"],
  },
  {
    pagePath: "devsearch",
    name: "Devsearch",
    description: "",
    projectImages: [devSearch],
    projectUrl: "",
    technologies: ["Python", "Django", "HTML", "CSS", "Javascript"],
  },
  {
    pagePath: "geekszone",
    name: "La zona del geek",
    description: "",
    projectImages: [geeksZone],
    projectUrl: "",
    technologies: ["Python", "Django", "HTML", "CSS", "Javascript"],
  },
  {
    pagePath: "iq-percentage-reader",
    name: "IQ Option percentage reader",
    description: "",
    projectImages: [iqReader],
    projectUrl: "",
    technologies: ["Python", "OpenCV"],
  },
  {
    pagePath: "bot-forex",
    name: "Bot forex",
    description: "",
    projectImages: [forexBot],
    projectUrl: "",
    technologies: ["Python"],
  },
];
