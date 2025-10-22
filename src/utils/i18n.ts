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
    // About page
    about: {
      title: 'About',
      description: 'Learn more about me and my journey',
    },
    // Work page
    work: {
      title: 'My Work',
      description: 'Take a look at some of my featured projects.',
    },
    // Contact
    contact: {
      title: 'Get in touch',
      description: 'Want to chat? Just shoot me a dm with a direct question on Twitter and I\'ll respond whenever I can.',
      cta: 'Send Message',
    },
    // Footer
    footer: {
      made_with: 'Made with',
      by: 'by',
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
    },
    // Work page
    work: {
      title: 'Mi Trabajo',
      description: 'Echa un vistazo a algunos de mis proyectos destacados.',
    },
    // Contact
    contact: {
      title: 'Contáctame',
      description: '¿Quieres charlar? Solo envíame un mensaje directo en Twitter y te responderé cuando pueda.',
      cta: 'Enviar Mensaje',
    },
    // Footer
    footer: {
      made_with: 'Hecho con',
      by: 'por',
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