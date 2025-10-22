export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Language = keyof typeof languages;

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      work: 'Work',
      about: 'About',
    },
    // Home page
    home: {
      greeting: 'Hello, my name is',
      title: 'Ana Monsalve',
      subtitle: 'Full Stack Developer',
      description: 'I\'m a passionate developer who loves creating digital experiences.',
      cta: 'Get in touch',
      workCta: 'View my work',
    },
    // Work page
    work: {
      title: 'My Work',
      description: 'Take a look at some of my featured projects.',
      heroTitle: 'My Work',
      heroTagline: 'See my most recent projects below to get an idea of my past experience.',
      backLink: 'Work',
    },
    // Contact
    contact: {
      title: 'Get in touch',
      description: 'Want to chat? Just shoot me a dm with a direct question on Twitter and I\'ll respond whenever I can.',
      cta: 'Send Message',
    },
    // ContactCTA
    contactCta: {
      title: 'Interested in working together?',
      button: 'Send Me a Message',
    },
    // About page
    about: {
      title: 'About',
      description: 'Learn more about me and my journey',
      heroTagline: 'Software Development Assistant specializing in app creation and front-end, with a talent for problem-solving and collaboration.',
      backgroundTitle: 'Background',
      backgroundText: 'Welcome! I\'m Ana María Monsalve, a Technical Assistant in Software Development with a strong track record in business digital transformation. My expertise includes application creation, architecture, and frontend development. I excel in technologies like Node.js, Python, and React, with experience in version control and automation. I take pride in my problem-solving skills, attention to detail, and collaborative teamwork.',
      educationTitle: 'Education',
      cesdeInstitution: 'Cesde Institución Educativa',
      cesdeDegree: 'Technical Degree in Software Development',
      cesdeLocation: 'Medellín, Colombia',
      cesdeGraduation: 'Graduated: September 2023',
      senaInstitution: 'Servicio Nacional de Aprendizaje (SENA)',
      senaDegree: 'Technology in Software Analysis and Development',
      senaLocation: 'Medellín, Colombia',
      senaGraduation: 'Expected Graduation: october 2026',
      skillsTitle: 'Skills',
      webDevTitle: 'Web Development',
      webDevDesc: 'Proficient in both front-end and back-end development using Node.js, Python, Astro, React, HTML, and JavaScript. Skilled in creating responsive and dynamic web applications.',
      databaseTitle: 'Databases',
      databaseDesc: 'Experienced in managing databases such as MongoDB, Firebase, and SQL Server, ensuring efficient data storage and retrieval.',
      automationTitle: 'Automation and Docker',
      automationDesc: 'Implemented automation practices and containerization, optimizing workflows and improving deployment processes.',
      projectMgmtTitle: 'Project Management',
      projectMgmtDesc: 'Adept at using Jira for planning, tracking, and managing projects, ensuring timely and efficient completion.',
      mobileDevTitle: 'Mobile Application Development',
      mobileDevDesc: 'Created and managed mobile applications using AppSheet, enhancing user experience and functionality.',
    },
    // Footer
    footer: {
      designedIn: 'Designed & Developed in Colombia with',
      copyright: '© {year} Ana Monsalve',
      twitter: 'Twitter',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
  es: {
    // Navigation
    nav: {
      home: 'Inicio',
      work: 'Proyectos',
      about: 'Acerca de',
    },
    // Home page
    home: {
      greeting: 'Hola, mi nombre es',
      title: 'Ana Monsalve',
      subtitle: 'Desarrolladora Full Stack',
      description: 'Soy una desarrolladora apasionada que ama crear experiencias digitales.',
      cta: 'Contáctame',
      workCta: 'Ver mi trabajo',
    },
    // About page
    about: {
      title: 'Acerca de',
      description: 'Conoce más sobre mí y mi trayectoria',
      heroTagline: 'Asistente en Desarrollo de Software especializada en creación de aplicaciones y front-end, con talento para la resolución de problemas y colaboración.',
      backgroundTitle: 'Antecedentes',
      backgroundText: '¡Bienvenida! Soy Ana María Monsalve, Asistente Técnica en Desarrollo de Software con un sólido historial en transformación digital empresarial. Mi experiencia incluye creación de aplicaciones, arquitectura y desarrollo frontend. Sobresalgo en tecnologías como Node.js, Python y React, con experiencia en control de versiones y automatización. Me enorgullezco de mis habilidades para resolver problemas, atención al detalle y trabajo colaborativo en equipo.',
      educationTitle: 'Educación',
      cesdeInstitution: 'Cesde Institución Educativa',
      cesdeDegree: 'Título Técnico en Desarrollo de Software',
      cesdeLocation: 'Medellín, Colombia',
      cesdeGraduation: 'Graduada: Septiembre 2023',
      senaInstitution: 'Servicio Nacional de Aprendizaje (SENA)',
      senaDegree: 'Tecnología en Análisis y Desarrollo de Software',
      senaLocation: 'Medellín, Colombia',
      senaGraduation: 'Graduación esperada: octubre 2026',
      skillsTitle: 'Habilidades',
      webDevTitle: 'Desarrollo Web',
      webDevDesc: 'Competente en desarrollo tanto front-end como back-end usando Node.js, Python, Astro, React, HTML y JavaScript. Hábil en crear aplicaciones web responsivas y dinámicas.',
      databaseTitle: 'Bases de Datos',
      databaseDesc: 'Experiencia en manejo de bases de datos como MongoDB, Firebase y SQL Server, asegurando almacenamiento y recuperación eficiente de datos.',
      automationTitle: 'Automatización y Docker',
      automationDesc: 'Implementado prácticas de automatización y containerización, optimizando flujos de trabajo y mejorando procesos de despliegue.',
      projectMgmtTitle: 'Gestión de Proyectos',
      projectMgmtDesc: 'Competente en usar Jira para planificar, rastrear y gestionar proyectos, asegurando completación oportuna y eficiente.',
      mobileDevTitle: 'Desarrollo de Aplicaciones Móviles',
      mobileDevDesc: 'Creado y gestionado aplicaciones móviles usando AppSheet, mejorando experiencia de usuario y funcionalidad.',
    },
    // Work page
    work: {
      title: 'Mi Trabajo',
      description: 'Echa un vistazo a algunos de mis proyectos destacados.',
      heroTitle: 'Mi Trabajo',
      heroTagline: 'Mira mis proyectos más recientes para tener una idea de mi experiencia pasada.',
      backLink: 'Proyectos',
    },
    // Contact
    contact: {
      title: 'Contáctame',
      description: '¿Quieres charlar? Solo envíame un mensaje directo en Twitter y te responderé cuando pueda.',
      cta: 'Enviar Mensaje',
    },
    // ContactCTA
    contactCta: {
      title: '¿Interesado en trabajar juntos?',
      button: 'Envíame un Mensaje',
    },
    // Footer
    footer: {
      designedIn: 'Diseñado y Desarrollado en Colombia con',
      copyright: '© {year} Ana Monsalve',
      twitter: 'Twitter',
      github: 'GitHub',
      linkedin: 'LinkedIn',
    },
  },
} as const;

export function useTranslations(lang: Language) {
  return translations[lang];
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return 'en';
}