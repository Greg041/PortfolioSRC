import ProjectInfo from "src/interfaces/ProjectInfo.interface";
import instakash1 from "src/assets/works/instakash1.png";
import instakash2 from "src/assets/works/instakash2.png";
import instakash3 from "src/assets/works/instakash3.png";
import alfabc from "src/assets/works/invest_landing.jpg";
import devSearch from "src/assets/works/devsearch.jpg";
import devSearch2 from "src/assets/works/devsearch2.png";
import devSearch3 from "src/assets/works/devsearch3.png";
import geeksZone from "src/assets/works/geeks_zone.jpg";
import iqReader from "src/assets/works/iq_percentage_reader.png";
import forexBot from "src/assets/works/bot_forex.jpg";

export const PROJECTS: ProjectInfo[] = [
  {
    pagePath: "instakash",
    name: "Instakash",
    description:
      "Instakash es una plataforma intercambio de divisas localizada en Perú. " +
      "Trabajé como desarrollador backend desarrollando desde cero una API Rest a través de microservicios, " +
      "una plataforma que incluye sistema de autenticación, creación " +
      "de tasas de cambio para las divisas aceptadas por instakash y un sistema de gestión de operaciones " +
      "cambiarias para que la empresa provea del servicio a otras empresas clientes localizadas en el país." +
      "Además de corregir bugs presentados en la plataforma principal usada por los usuarios naturales y agregar " +
      "documentación a su API.",
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
    pagePath: "Crowdinvest",
    name: "Crowdinvest",
    description:
      "Plataforma de inversión crowdfunding enfocada en diversos tipos de activos financieros. " +
      "Trabajé como desarrollador full stack manteniendo y mejorando funcionalidades existentes y arquitectura del proyecto, " +
      "además de desarrollar nuevas funcionalidades para plataforma, " +
      "desde la integración de una pasarela de pagos a través de paypal, crypto y transferencias bancarias, hasta " +
      "la integración de Wagtail (cms desarrollado en django) agregando plantillas para las empresas clientes de " +
      "CrowdInvest que quieran alojar su landing page en la plataforma,.",
    projectImages: [alfabc],
    projectUrl: "https://invest.alfabc.io/",
    technologies: ["Python", "Django", "HTML", "CSS", "Javascript", "HTMX"],
  },
  {
    pagePath: "devsearch",
    name: "Devsearch",
    description:
      "Proyecto personal cuya finalidad es ayudar a los desarrolladores a encontrar " +
      "oportunidades laborales. Contiene sistema de registro y login, edición del perfil para agregar habilidades " +
      "técnicas, además de contar con una API la cual expone algunos endpoints para solicitar información de la Base de datos",
    projectImages: [devSearch, devSearch2, devSearch3],
    projectUrl: "",
    technologies: ["Python", "Django", "HTML", "CSS", "Javascript"],
  },
  {
    pagePath: "geekszone",
    name: "La zona del geek",
    description:
      "Proyecto personal el cual consiste en un blog de tecnología y otras noticias enfocadas en el mundo geek.",
    projectImages: [geeksZone],
    projectUrl: "https://geeks-blog.up.railway.app/posts/?page=1",
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
