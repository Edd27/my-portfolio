export const LINKS = [
  {
    name: "Inicio",
    href: "/",
    enabled: false,
  },
  {
    name: "Acerca",
    href: "#about",
    enabled: true,
  },
  {
    name: "EddBot",
    href: "#eddbot",
    enabled: true,
  },
  {
    name: "Experiencia",
    href: "#experience",
    enabled: true,
  },
  {
    name: "Proyectos",
    href: "#projects",
    enabled: true,
  },
  {
    name: "Contacto",
    href: "#contact",
    enabled: true,
  },
];

export const EXPERIENCE = [
  {
    date: "Agosto 2023 - Actualmente",
    title: "Desarrollador de Software - Magno Technology",
    responsabilities: [
      {
        id: 1,
        description:
          "Desarrollé la lógica del lado del servidor, gestioné bases de datos y garantizé una comunicación eficaz entre el frontend y el backend.",
      },
      {
        id: 2,
        description:
          "Colaboré con diseñadores y otros desarrolladores para garantizar una experiencia de usuario coherente y de alta calidad.",
      },
      {
        id: 3,
        description:
          "Diseñe e implemente interfaces de usuario atractivas y funcionales utilizando tecnologías como HTML, CSS y JavaScript.",
      },
      {
        id: 4,
        description:
          "Implementé prácticas de optimización del código y realicé periódicamente pruebas de rendimiento.",
      },
      {
        id: 5,
        description:
          "Integre servicios externos y API para mejorar la funcionalidad y la interoperabilidad de las aplicaciones.",
      },
    ],
    link: null,
  },
  {
    date: "Enero 2023 - Agosto 2023",
    title: "Desarrollador de Software - Freelancer",
    responsabilities: [
      {
        id: 1,
        description:
          "Construí páginas de aterrizaje para clientes, lo que les permitió impulsar su negocio, aumentando sus ventas.",
      },
      {
        id: 2,
        description:
          "Diseñé e implementé aplicaciones web a la medida permitiendo solucionar problemas de negocio de mis clientes.",
      },
    ],
    link: null,
  },
  {
    date: "Agosto 2021 - Enero 2023",
    title: "Desarrollador de Software - Bitmart",
    responsabilities: [
      {
        id: 1,
        description:
          "Diseñé e implementé la API REST para el consumo de información permitiendo desarrollar diversas aplicaciones web y ahorrando tiempo.",
      },
      {
        id: 2,
        description:
          "Desarrollé el sistema interno principal de la empresa que permitió gestionar la información de los clientes, implementando automatizaciones para ahorrar tiempo a los usuarios que lo utilicen.",
      },
      {
        id: 3,
        description:
          "Implementé y gestioné contenedores que facilitaron el despliegue de las aplicaciones que se desarrollaban.",
      },
      {
        id: 4,
        description:
          "Implementé estrategias para optimizar y garantizar la mayor disponibilidad de servicios y aplicaciones, gestionando servidores y bases de datos alojadas.",
      },
    ],
    link: null,
  },
];

export const TAGS = {
  TAILWINDCSS: {
    name: "Tailwind CSS",
    classes: "bg-sky-500 opacity-80",
    icon: "TailwindCss",
  },
  REACT: {
    name: "React",
    classes: "bg-sky-600 opacity-80",
    icon: "React",
  },
  NEXT: {
    name: "Next.js",
    classes: "bg-black border border-white/30 opacity-80",
    icon: "Next",
  },
  CSS: {
    name: "CSS",
    classes: "bg-blue-600 opacity-80",
    icon: "CSS",
  },
  HTML: {
    name: "HTML",
    classes: "bg-orange-600 opacity-80",
    icon: "HTML",
  },
  JAVASCRIPT: {
    name: "JavaScript",
    classes: "bg-yellow-600 opacity-80",
    icon: "JavaScript",
  },
};

export const PROJECTS = [
  {
    title: "Chat IA",
    description:
      "Chatbot interactivo con un modelo de inteligencia artificial (IA) utilizando únicamente lenguajes web front-end como Javascript, CSS y HTML. El modelo de IA se descarga y se almacena en caché dentro del navegador, permitiendo que el chatbot funcione sin necesidad de una conexión a internet constante.",
    link: "https://chat.edgarbenavides.dev",
    github: "https://github.com/Edd27/chatgpt-local",
    image: "/projects/chat-ia.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
  },
  {
    title: "Viajes Lualza",
    description:
      'Landing page diseñada e implementada a la medida en base a los requerimientos del cliente. Permitiendo modificar su contenido desde un panel de control con un acceso proporcionado al administrador del negocio. En colaboración con el equipo de desarrollo: <a href="https://www.linkedin.com/in/marcos-lp/" target="_blank" class="underline text-sky-800 dark:text-sky-200">Marcos Lopez</a>, <a href="https://www.linkedin.com/in/ia-grajeda/" target="_blank" class="underline text-sky-800 dark:text-sky-200">Alejandro Grajeda</a> y <a href="https://www.linkedin.com/in/martin-lara-peredo-41a5b1287/" target="_blank" class="underline text-sky-800 dark:text-sky-200">Martin Lara</a>',
    link: "https://www.viajeslualza.com/",
    github: null,
    image: "/projects/viajes-lualza.webp",
    tags: [TAGS.REACT, TAGS.TAILWINDCSS],
  },
  {
    title: "Admintrav",
    description:
      'Panel de control para administrar el contenido de la landing page de Viajes Lualza. En colaboración con el equipo de desarrollo: <a href="https://www.linkedin.com/in/marcos-lp/" target="_blank" class="underline text-sky-800 dark:text-sky-200">Marcos Lopez</a>, <a href="https://www.linkedin.com/in/ia-grajeda/" target="_blank" class="underline text-sky-800 dark:text-sky-200">Alejandro Grajeda</a> y <a href="https://www.linkedin.com/in/martin-lara-peredo-41a5b1287/" target="_blank" class="underline text-sky-800 dark:text-sky-200">Martin Lara</a>',
    link: "https://admintrav.vercel.app",
    github: null,
    image: "/projects/admintrav.webp",
    tags: [TAGS.TAILWINDCSS, TAGS.NEXT],
  },
  {
    title: "Radio Alegría Moroleón",
    description:
      'Aplicación web para transmisión en vivo de la estación de Radio Alegría Moroleón. Para más información acerca de la estación de radio, puedes visitar su sitio web en <a href="https://www.radiomoroleon.mx/Inicio/" target="_blank">Radio Alegría Moroleón</a>',
    link: "https://radio.edgarbenavides.dev/",
    github: "https://github.com/Edd27/radio-alegria-app",
    image: "/projects/radio-alegria.webp",
    tags: [TAGS.TAILWINDCSS, TAGS.NEXT],
  },
  {
    title: "Mi aguinaldo",
    description:
      "Aplicación web para calcular tu aguinaldo como empleado en México.",
    link: "https://miaguinaldo.edgarbenavides.dev/",
    github: "https://github.com/Edd27/calculadora-aguinaldo",
    image: "/projects/mi-aguinaldo.webp",
    tags: [TAGS.TAILWINDCSS, TAGS.REACT],
  },
  {
    title: "Cocktails",
    description:
      "Aplicación web que te permite encontrar las recetas de tus bebidas y cocteles favoritos o descubrir nuevas.",
    link: "https://cocktails.edgarbenavides.dev/",
    github: "https://github.com/Edd27/cocktails-app",
    image: "/projects/cocktails-app.webp",
    tags: [TAGS.TAILWINDCSS, TAGS.REACT],
  },
];
