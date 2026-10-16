export const LANG_PREF_KEY = "langPref";

// Solo "/" esta en ingles; "/es" y las landings agricolas son en espanol.
// La redireccion automatica por idioma del navegador vive en el script inline de index.html
// (corre antes de pintar, sin parpadeo) y usa esta misma llave de localStorage.
export const isEnglishPath = (pathname) => pathname === "/";

export const saveLanguagePreference = (lang) => {
  try {
    localStorage.setItem(LANG_PREF_KEY, lang);
  } catch (error) {
    // Sin almacenamiento (modo privado o bloqueado): la eleccion aplica solo a esta visita.
  }
};
