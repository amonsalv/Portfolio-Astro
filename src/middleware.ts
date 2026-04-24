import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // Previene que el navegador intente adivinar el tipo de contenido
  response.headers.set("X-Content-Type-Options", "nosniff");

  // Previene clickjacking
  response.headers.set("X-Frame-Options", "SAMEORIGIN");

  // Protección XSS (legacy, para navegadores antiguos)
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Controla información del referrer
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Content Security Policy - adapta según tus necesidades
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'"
  );

  // Controla permisos de APIs del navegador
  response.headers.set(
    "Permissions-Policy",
    "geolocation=(), microphone=(), camera=(), payment=()"
  );

  // HSTS - Força HTTPS (descomentar solo si usas HTTPS en producción)
  // response.headers.set(
  //   "Strict-Transport-Security",
  //   "max-age=31536000; includeSubDomains; preload"
  // );

  return response;
});
